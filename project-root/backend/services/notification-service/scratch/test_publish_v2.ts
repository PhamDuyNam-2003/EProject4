import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672";
const QUEUES = {
  BOOKING_CREATED: "booking_created_queue",
  BOOKING_CANCELLED: "booking_cancelled_queue",
  SMS_OTP: "sms_otp_queue",
  PUSH_NOTIFICATION: "push_notification_queue",
};

async function publishTestEvents() {
  console.log("[TestPublisher V2] Connecting to RabbitMQ at:", RABBITMQ_URL);
  let connection;
  try {
    connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Assert queues
    await channel.assertQueue(QUEUES.BOOKING_CREATED, { durable: true });
    await channel.assertQueue(QUEUES.BOOKING_CANCELLED, { durable: true });
    await channel.assertQueue(QUEUES.SMS_OTP, { durable: true });
    await channel.assertQueue(QUEUES.PUSH_NOTIFICATION, { durable: true });

    // 1. Publish Booking Created Event (Email)
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

    console.log("[TestPublisher V2] Publishing BOOKING_CREATED event...");
    channel.sendToQueue(
      QUEUES.BOOKING_CREATED,
      Buffer.from(JSON.stringify(createdPayload)),
      { persistent: true }
    );
    console.log("[TestPublisher V2] Published Created:", createdPayload);

    // 2. Publish SMS OTP Event
    const smsPayload = {
      to: "+84987654321",
      message: "Mã OTP xác nhận giao dịch NestBooking của bạn là: 123456. Có hiệu lực trong 5 phút.",
    };

    console.log("[TestPublisher V2] Publishing SMS_OTP event...");
    channel.sendToQueue(
      QUEUES.SMS_OTP,
      Buffer.from(JSON.stringify(smsPayload)),
      { persistent: true }
    );
    console.log("[TestPublisher V2] Published SMS:", smsPayload);

    // 3. Publish Push Notification Event
    const pushPayload = {
      userId: "a7b3c9d2-e5f8-4b2a-ae7b-ff23456789ab", // Mock user ID
      title: "Yêu cầu dọn phòng đã xong!",
      body: "Phòng Premium Penthouse Suite của bạn đã được dọn dẹp sạch sẽ và sẵn sàng đón khách.",
      data: {
        bookingId: "BKG-2026-8899",
        action: "ROOM_CLEANED",
      },
    };

    console.log("[TestPublisher V2] Publishing PUSH_NOTIFICATION event...");
    channel.sendToQueue(
      QUEUES.PUSH_NOTIFICATION,
      Buffer.from(JSON.stringify(pushPayload)),
      { persistent: true }
    );
    console.log("[TestPublisher V2] Published Push:", pushPayload);

    // 4. Publish Booking Cancelled Event (Email) in 2 seconds
    const cancelledPayload = {
      to: "test-receiver@ethereal.email",
      customerName: "Phạm Duy Nam",
      bookingId: "BKG-2026-8899",
      hotelName: "Grand Nest Luxury Hotel & Suites",
      roomType: "Premium Penthouse Suite with Ocean View",
      checkInDate: "2026-07-20T14:00:00Z",
      totalPrice: "15,800,000 VND",
    };

    console.log("[TestPublisher V2] Publishing BOOKING_CANCELLED event in 2 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    channel.sendToQueue(
      QUEUES.BOOKING_CANCELLED,
      Buffer.from(JSON.stringify(cancelledPayload)),
      { persistent: true }
    );
    console.log("[TestPublisher V2] Published Cancelled:", cancelledPayload);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await channel.close();
    console.log("[TestPublisher V2] Done publishing all test events!");
  } catch (error) {
    console.error("[TestPublisher V2] Error during publish:", error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

publishTestEvents();
