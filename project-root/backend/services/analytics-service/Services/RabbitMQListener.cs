using System;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using AnalyticsService.Data;
using AnalyticsService.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace AnalyticsService.Services
{
    public class OrderCreatedMessage
    {
        public string OrderId { get; set; } = string.Empty;
        public string HotelId { get; set; } = string.Empty;
        public decimal TotalPrice { get; set; }
    }

    public class RabbitMQListener : BackgroundService
    {
        private readonly ILogger<RabbitMQListener> _logger;
        private readonly IConfiguration _configuration;
        private readonly IServiceProvider _serviceProvider;
        private IConnection? _connection;
        private IChannel? _channel;

        public RabbitMQListener(ILogger<RabbitMQListener> logger, IConfiguration configuration, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _configuration = configuration;
            _serviceProvider = serviceProvider;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            try
            {
                var factory = new ConnectionFactory()
                {
                    Uri = new Uri(_configuration.GetConnectionString("RabbitMQ") ?? "amqp://guest:guest@localhost:5672"),
                };

                _connection = await factory.CreateConnectionAsync();
                _channel = await _connection.CreateChannelAsync();

                await _channel.QueueDeclareAsync(queue: "order.created.analytics",
                                     durable: true,
                                     exclusive: false,
                                     autoDelete: false,
                                     arguments: null);

                // Assuming exchange "order_events" exists, we bind to it
                await _channel.ExchangeDeclareAsync("order_events", ExchangeType.Topic, durable: true);
                await _channel.QueueBindAsync(queue: "order.created.analytics",
                                  exchange: "order_events",
                                  routingKey: "order.created");

                var consumer = new AsyncEventingBasicConsumer(_channel);
                consumer.ReceivedAsync += async (model, ea) =>
                {
                    var body = ea.Body.ToArray();
                    var message = Encoding.UTF8.GetString(body);
                    _logger.LogInformation("Received message: {0}", message);

                    try
                    {
                        var orderMsg = JsonSerializer.Deserialize<OrderCreatedMessage>(message);
                        if (orderMsg != null)
                        {
                            using var scope = _serviceProvider.CreateScope();
                            var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

                            var record = new RevenueRecord
                            {
                                OrderId = orderMsg.OrderId,
                                HotelId = orderMsg.HotelId,
                                Amount = orderMsg.TotalPrice
                            };

                            dbContext.RevenueRecords.Add(record);
                            await dbContext.SaveChangesAsync();
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError(ex, "Error processing message");
                    }

                    await _channel.BasicAckAsync(deliveryTag: ea.DeliveryTag, multiple: false);
                };

                await _channel.BasicConsumeAsync(queue: "order.created.analytics",
                                     autoAck: false,
                                     consumer: consumer);
                                     
                _logger.LogInformation("RabbitMQ Listener started.");

                // Keep listening
                while (!stoppingToken.IsCancellationRequested)
                {
                    await Task.Delay(1000, stoppingToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "RabbitMQ connection error");
            }
        }

        public override async Task StopAsync(CancellationToken cancellationToken)
        {
            if (_channel != null)
                await _channel.CloseAsync();
            if (_connection != null)
                await _connection.CloseAsync();
            
            await base.StopAsync(cancellationToken);
        }
    }
}
