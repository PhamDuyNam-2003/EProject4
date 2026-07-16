import amqp from "amqplib";
import { env } from "../config/env.js";

export const QUEUES = {
  BOOKING_CREATED: "booking_created_queue",
  BOOKING_CANCELLED: "booking_cancelled_queue",
} as const;

export class RabbitMQConnection {
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;
  private isConnecting = false;

  async connect(maxRetries = 10, delay = 3000): Promise<void> {
    if (this.isConnecting) return;
    this.isConnecting = true;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        console.log(`[RabbitMQ] Connecting to RabbitMQ... (Attempt ${attempt + 1}/${maxRetries})`);
        this.connection = await amqp.connect(env.RABBITMQ_URL);
        this.channel = await this.connection.createChannel();

        // Assert queues we need
        await this.channel.assertQueue(QUEUES.BOOKING_CREATED, { durable: true });
        await this.channel.assertQueue(QUEUES.BOOKING_CANCELLED, { durable: true });

        console.log("[RabbitMQ] Connected successfully!");
        this.isConnecting = false;

        // Handle connection close
        this.connection.on("close", () => {
          console.warn("[RabbitMQ] Connection closed. Reconnecting...");
          this.connection = null;
          this.channel = null;
          this.connect().catch(console.error);
        });

        this.connection.on("error", (err) => {
          console.error("[RabbitMQ] Connection error:", err);
        });

        return;
      } catch (error) {
        attempt++;
        console.error(`[RabbitMQ] Connection failed (${attempt}/${maxRetries}):`, error);

        if (attempt >= maxRetries) {
          console.error("[RabbitMQ] Maximum retry attempts reached. Exiting...");
          process.exit(1);
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
        delay = Math.min(delay * 2, 30000); // Exponential backoff
      }
    }
    this.isConnecting = false;
  }

  private getChannel(): amqp.Channel {
    if (!this.channel) {
      throw new Error("[RabbitMQ] Channel not initialized. Call connect() first.");
    }
    return this.channel;
  }

  async sendToQueue<T>(
    queueName: string,
    data: T,
    options?: amqp.Options.Publish
  ): Promise<void> {
    const channel = this.getChannel();
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), {
      persistent: true,
      ...options,
    });
  }

  async consumeQueue(
    queueName: string,
    onMessage: (msg: amqp.ConsumeMessage | null) => Promise<void> | void
  ): Promise<void> {
    const channel = this.getChannel();
    await channel.prefetch(1);
    await channel.consume(queueName, onMessage, {
      noAck: false,
    });
  }

  ack(msg: amqp.ConsumeMessage): void {
    this.getChannel().ack(msg);
  }

  nack(msg: amqp.ConsumeMessage, requeue = true): void {
    this.getChannel().nack(msg, false, requeue);
  }

  async close(): Promise<void> {
    try {
      if (this.channel) {
        await this.channel.close();
        console.log("[RabbitMQ] Channel closed.");
      }
      if (this.connection) {
        await this.connection.close();
        console.log("[RabbitMQ] Connection closed.");
      }
    } catch (error) {
      console.error("[RabbitMQ] Error while closing connection:", error);
    }
  }
}

export const rabbitMQ = new RabbitMQConnection();
export default rabbitMQ;
