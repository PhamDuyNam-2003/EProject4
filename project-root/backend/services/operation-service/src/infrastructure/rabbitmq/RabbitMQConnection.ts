import * as amqp from "amqplib";
import { env } from "../../config/env.js";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672";

class RabbitMQConnection {
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;

  async connect(maxRetries = 10, delayMs = 3000): Promise<void> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.connection = await amqp.connect(RABBITMQ_URL);
        this.channel = await this.connection.createChannel();

        console.log("[RabbitMQ] Connected to RabbitMQ");

        return; 
      } catch (error) {
        console.error(`[RabbitMQ] Connection Attempt ${attempt} failed:`, error);
        if (attempt < maxRetries) {
          console.log(`[RabbitMQ] Retrying in ${delayMs / 1000}s...`);
          await new Promise((resolve) => setTimeout(resolve, delayMs));
        } else {
          throw new Error("Failed to connect to RabbitMQ after max retries");
        }
      }
    }
  }

  getChannel(): amqp.Channel {
    if (!this.channel) {
      throw new Error("RabbitMQ Channel is not initialized.");
    }
    return this.channel;
  }

  async consumeEvent(
    exchange: string,
    routingKey: string,
    queueName: string,
    onMessage: (msg: any) => Promise<void>
  ): Promise<void> {
    const channel = this.getChannel();

    await channel.assertExchange(exchange, "topic", { durable: true });
    
    const q = await channel.assertQueue(queueName, { durable: true });
    await channel.bindQueue(q.queue, exchange, routingKey);

    await channel.prefetch(1);

    await channel.consume(q.queue, async (msg) => {
      if (msg !== null) {
        try {
          const content = JSON.parse(msg.content.toString());
          await onMessage(content);
          channel.ack(msg);
        } catch (err) {
          console.error(`[RabbitMQ] Error processing message in ${queueName}:`, err);
          // Nack and do not requeue to avoid infinite loop on bad messages
          channel.nack(msg, false, false);
        }
      }
    });
  }

  async close(): Promise<void> {
    try {
      if (this.channel) await this.channel.close();
      if (this.connection) await this.connection.close();
      console.log("[RabbitMQ] Connection closed.");
    } catch (error) {
      console.error("[RabbitMQ] Error closing connection:", error);
    }
  }
}

export default RabbitMQConnection;
