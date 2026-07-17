import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672";
const QUEUES = {
  BOOKING_CREATED: "booking_created_queue",
  BOOKING_CANCELLED: "booking_cancelled_queue",
};

async function publishTestEvents() {
  console.log("[TestPublisher] Connecting to RabbitMQ at:", RABBITMQ_URL);
  let connection;
  try {
    connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Assert queues
    await channel.assertQueue(QUEUES.BOOKING_CREATED, { durable: true });
    await channel.assertQueue(QUEUES.BOOKING_CANCELLED, { durable: true });

    // 1. Publish Created Event
    const createdPayload = {
      to: "test-receiver@ethereal.email",
      customerName: "Phạm Duy Nam",
      bookingId: "BKG-2026-8899",
      hotelName: "Grand Nest Luxury Hotel & Suites",
      roomType: "Premium Penthouse Suite with Ocean View",
      checkInDate: "2026-07-20T14:00:00Z",
      checkOutDate: "2026-07-25T12:00:00Z",
      totalPrice: "15,800,000 VND",
    };

    console.log("[TestPublisher] Publishing BOOKING_CREATED event...");
    channel.sendToQueue(
      QUEUES.BOOKING_CREATED,
      Buffer.from(JSON.stringify(createdPayload)),
      { persistent: true }
    );
    console.log("[TestPublisher] Published Created:", createdPayload);

    // 2. Publish Cancelled Event
    const cancelledPayload = {
      to: "test-receiver@ethereal.email",
      customerName: "Phạm Duy Nam",
      bookingId: "BKG-2026-8899",
      hotelName: "Grand Nest Luxury Hotel & Suites",
      roomType: "Premium Penthouse Suite with Ocean View",
      checkInDate: "2026-07-20T14:00:00Z",
      totalPrice: "15,800,000 VND",
    };

    console.log("[TestPublisher] Publishing BOOKING_CANCELLED event in 2 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    channel.sendToQueue(
      QUEUES.BOOKING_CANCELLED,
      Buffer.from(JSON.stringify(cancelledPayload)),
      { persistent: true }
    );
    console.log("[TestPublisher] Published Cancelled:", cancelledPayload);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await channel.close();
    console.log("[TestPublisher] Done publishing!");
  } catch (error) {
    console.error("[TestPublisher] Error during publish:", error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

publishTestEvents();
