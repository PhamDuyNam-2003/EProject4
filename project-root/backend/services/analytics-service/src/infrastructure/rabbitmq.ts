import amqp from "amqplib";
import { env } from "../config/env.js";

export const QUEUES = {
  PAYMENT_COMPLETED: "payment_completed_queue",
  BOOKING_CREATED:   "booking_created_queue",
  BOOKING_CANCELLED: "booking_cancelled_queue",
} as const;

class RabbitMQConnection {
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;
  private isConnecting = false;

  async connect(maxRetries = 10, delayMs = 3000): Promise<void> {
    if (this.isConnecting) return;
    this.isConnecting = true;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        console.log(`[RabbitMQ] Connecting... (Attempt ${attempt + 1}/${maxRetries})`);
        this.connection = await amqp.connect(env.RABBITMQ_URL);
        this.channel   = await this.connection.createChannel();

        // Assert queues
        for (const queueName of Object.values(QUEUES)) {
          await this.channel.assertQueue(queueName, { durable: true });
        }

        console.log("[RabbitMQ] Connected successfully!");
        this.isConnecting = false;

        this.connection.on("close", () => {
          console.warn("[RabbitMQ] Connection closed – reconnecting...");
          this.connection = null;
          this.channel = null;
          setTimeout(() => this.connect().catch(console.error), 5000);
        });
        this.connection.on("error", (err) => console.error("[RabbitMQ] Error:", err));
        return;
      } catch (err) {
        attempt++;
        console.error(`[RabbitMQ] Failed (${attempt}/${maxRetries}):`, err);
        if (attempt >= maxRetries) { console.error("[RabbitMQ] Max retries reached."); process.exit(1); }
        await new Promise((r) => setTimeout(r, delayMs));
        delayMs = Math.min(delayMs * 2, 30000);
      }
    }
    this.isConnecting = false;
  }

  private getChannel(): amqp.Channel {
    if (!this.channel) throw new Error("[RabbitMQ] Channel not ready.");
    return this.channel;
  }

  async consumeQueue(
    queueName: string,
    handler: (msg: amqp.ConsumeMessage | null) => Promise<void>
  ): Promise<void> {
    const ch = this.getChannel();
    await ch.prefetch(5);
    await ch.consume(queueName, handler, { noAck: false });
  }

  ack(msg: amqp.ConsumeMessage): void  { this.getChannel().ack(msg); }
  nack(msg: amqp.ConsumeMessage, requeue = false): void { this.getChannel().nack(msg, false, requeue); }

  async close(): Promise<void> {
    if (this.channel)    await this.channel.close().catch(console.error);
    if (this.connection) await this.connection.close().catch(console.error);
  }
}

export const rabbitMQ = new RabbitMQConnection();
export default rabbitMQ;
