import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672";

const QUEUES = {
  PAYMENT_COMPLETED: "payment_completed_queue",
  BOOKING_CREATED:   "booking_created_queue",
  BOOKING_CANCELLED: "booking_cancelled_queue",
};

async function publishTestEvents(): Promise<void> {
  console.log("[TestTrigger] Connecting to RabbitMQ at:", RABBITMQ_URL);

  let connection: amqp.Connection | undefined;

  try {
    connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Assert queues
    for (const q of Object.values(QUEUES)) {
      await channel.assertQueue(q, { durable: true });
    }

    // ── 1. Mock PAYMENT_COMPLETED events ──
    const payments = [
      { userId: "a1b2c3d4-0000-0000-0000-000000000001", paymentId: "PAY-001", bookingId: "BKG-001", amount: 3200000 },
      { userId: "a1b2c3d4-0000-0000-0000-000000000002", paymentId: "PAY-002", bookingId: "BKG-002", amount: 5500000 },
      { userId: "a1b2c3d4-0000-0000-0000-000000000003", paymentId: "PAY-003", bookingId: "BKG-003", amount: 8800000 },
    ];

    for (const p of payments) {
      channel.sendToQueue(QUEUES.PAYMENT_COMPLETED, Buffer.from(JSON.stringify(p)), { persistent: true });
      console.log(`[TestTrigger] ✅ Published PAYMENT_COMPLETED – amount: ${p.amount.toLocaleString()} VND`);
    }

    // ── 2. Mock BOOKING_CREATED events ──
    const bookings = [
      { userId: "a1b2c3d4-0000-0000-0000-000000000001", bookingId: "BKG-001", hotelId: "hotel-uuid-001", amount: 3200000 },
      { userId: "a1b2c3d4-0000-0000-0000-000000000002", bookingId: "BKG-002", hotelId: "hotel-uuid-002", amount: 5500000 },
      { userId: "a1b2c3d4-0000-0000-0000-000000000004", bookingId: "BKG-004", hotelId: "hotel-uuid-001", amount: 2100000 },
    ];

    for (const b of bookings) {
      channel.sendToQueue(QUEUES.BOOKING_CREATED, Buffer.from(JSON.stringify(b)), { persistent: true });
      console.log(`[TestTrigger] ✅ Published BOOKING_CREATED – bookingId: ${b.bookingId}`);
    }

    // ── 3. Mock BOOKING_CANCELLED event ──
    const cancelled = { userId: "a1b2c3d4-0000-0000-0000-000000000002", bookingId: "BKG-002", hotelId: "hotel-uuid-002", refundAmount: 2750000 };
    channel.sendToQueue(QUEUES.BOOKING_CANCELLED, Buffer.from(JSON.stringify(cancelled)), { persistent: true });
    console.log(`[TestTrigger] ✅ Published BOOKING_CANCELLED – bookingId: ${cancelled.bookingId}`);

    await new Promise((r) => setTimeout(r, 1000));
    await channel.close();
    console.log("\n[TestTrigger] Done! All test events published.");
    console.log("[TestTrigger] Now manually trigger the batch job via:");
    console.log("  POST http://localhost:3005/api/v1/analytics/jobs/trigger");
    console.log('  Body: { "jobName": "DAILY_REVENUE", "date": "2026-07-16" }');
  } catch (err) {
    console.error("[TestTrigger] Error:", err);
  } finally {
    if (connection) await connection.close();
  }
}

publishTestEvents();
