import { Router, Request, Response } from "express";
import { rabbitMQ, QUEUES } from "../infrastructure/rabbitmq.js";
import { smsService } from "../services/smsService.js";
import { pushNotificationService } from "../services/pushNotificationService.js";

const router = Router();

// POST /api/v1/notifications/send-sms (Manually trigger direct SMS)
router.post("/send-sms", async (req: Request, res: Response) => {
  try {
    const { to, message } = req.body;
    if (!to || !message) {
      res.status(400).json({ error: "Missing required fields: to, message" });
      return;
    }
    await smsService.sendSms(to, message);
    res.json({ success: true, message: `Direct SMS sent to ${to}` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/notifications/send-push (Manually trigger direct push notification)
router.post("/send-push", async (req: Request, res: Response) => {
  try {
    const { userId, tokens, title, body, data } = req.body;
    if (!title || !body) {
      res.status(400).json({ error: "Missing required fields: title, body" });
      return;
    }

    if (userId) {
      await pushNotificationService.sendPushToUser(userId, title, body, data);
      res.json({ success: true, message: `Direct push sent to userId: ${userId}` });
    } else if (tokens && tokens.length > 0) {
      await pushNotificationService.sendPushNotification(tokens, title, body, data);
      res.json({ success: true, message: `Direct push sent to ${tokens.length} tokens` });
    } else {
      res.status(400).json({ error: "Must provide either userId or tokens array" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/notifications/test-booking-created (Publish created event to RabbitMQ)
router.post("/test-booking-created", async (req: Request, res: Response) => {
  try {
    const payload = {
      to: req.body.to || "customer@example.com",
      customerName: req.body.customerName || "Nguyễn Văn A",
      bookingId: req.body.bookingId || "BKG-991234",
      hotelName: req.body.hotelName || "NestBooking Luxury Resort & Spa",
      roomType: req.body.roomType || "Deluxe Ocean View (King Bed)",
      checkInDate: req.body.checkInDate || "2026-08-01",
      checkOutDate: req.body.checkOutDate || "2026-08-05",
      totalPrice: req.body.totalPrice || "12,500,000 VND",
    };

    await rabbitMQ.sendToQueue(QUEUES.BOOKING_CREATED, payload);
    res.json({ message: "Mock BOOKING_CREATED event published to queue", payload });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/notifications/test-booking-cancelled (Publish cancelled event to RabbitMQ)
router.post("/test-booking-cancelled", async (req: Request, res: Response) => {
  try {
    const payload = {
      to: req.body.to || "customer@example.com",
      customerName: req.body.customerName || "Nguyễn Văn A",
      bookingId: req.body.bookingId || "BKG-991234",
      hotelName: req.body.hotelName || "NestBooking Luxury Resort & Spa",
      roomType: req.body.roomType || "Deluxe Ocean View (King Bed)",
      checkInDate: req.body.checkInDate || "2026-08-01",
      totalPrice: req.body.totalPrice || "12,500,000 VND",
    };

    await rabbitMQ.sendToQueue(QUEUES.BOOKING_CANCELLED, payload);
    res.json({ message: "Mock BOOKING_CANCELLED event published to queue", payload });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/notifications/test-sms-otp (Publish SMS OTP event to RabbitMQ)
router.post("/test-sms-otp", async (req: Request, res: Response) => {
  try {
    const payload = {
      to: req.body.to || "+84987654321",
      message: req.body.message || "Mã OTP xác thực tài khoản NestBooking của bạn là: 889911. Hiệu lực trong 2 phút.",
    };

    await rabbitMQ.sendToQueue("sms_otp_queue", payload);
    res.json({ message: "Mock SMS OTP event published to queue sms_otp_queue", payload });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/notifications/test-push-notification (Publish Push notification event to RabbitMQ)
router.post("/test-push-notification", async (req: Request, res: Response) => {
  try {
    const payload = {
      userId: req.body.userId || "a7b3c9d2-e5f8-4b2a-ae7b-ff23456789ab",
      title: req.body.title || "Phòng của bạn đã được dọn xong!",
      body: req.body.body || "Khách sạn NestBooking Luxury Resort hân hạnh thông báo phòng Deluxe Ocean View của quý khách đã sẵn sàng để check-in.",
      data: req.body.data || { bookingId: "BKG-991234", action: "OPEN_BOOKING_DETAILS" },
    };

    await rabbitMQ.sendToQueue("push_notification_queue", payload);
    res.json({ message: "Mock Push notification event published to queue push_notification_queue", payload });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
