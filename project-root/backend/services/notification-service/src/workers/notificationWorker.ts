import { rabbitMQ, QUEUES } from "../infrastructure/rabbitmq.js";
import { emailService } from "../services/emailService.js";
import { smsService } from "../services/smsService.js";
import { pushNotificationService } from "../services/pushNotificationService.js";
import { prisma } from "../infrastructure/database.js";

async function saveAppNotification(
  userId: string,
  title: string,
  body: string,
  type: "BOOKING_CREATED" | "BOOKING_CANCELLED" | "BOOKING_CONFIRMED" | "PAYMENT_SUCCESS" | "PAYMENT_FAILED" | "PROMOTION" | "SYSTEM",
  data?: any
): Promise<void> {
  try {
    await prisma.appNotification.create({
      data: { userId, title, body, type, data: (data ?? {}) as any },
    });
    console.log(`[Worker] AppNotification saved for user ${userId} (type: ${type})`);
  } catch (err) {
    console.error(`[Worker] Failed to save AppNotification for user ${userId}:`, err);
  }
}

async function createEmailLog(
  to: string,
  subject: string,
  template: string,
  retryCount: number
): Promise<string> {
  try {
    const log = await prisma.emailLog.create({
      data: {
        to,
        subject,
        template,
        status: "PENDING",
        retryCount,
      },
    });
    return log.id;
  } catch (err) {
    console.error("[Worker] Failed to create EmailLog:", err);
    return "";
  }
}

async function updateEmailLog(
  id: string,
  status: "SUCCESS" | "FAILED",
  error?: string
): Promise<void> {
  if (!id) return;
  try {
    await prisma.emailLog.update({
      where: { id },
      data: { status, error: error || null },
    });
  } catch (err) {
    console.error(`[Worker] Failed to update EmailLog ${id}:`, err);
  }
}

async function createSMSLog(
  to: string,
  message: string,
  retryCount: number
): Promise<string> {
  try {
    const log = await prisma.smsLog.create({
      data: {
        to,
        message,
        status: "PENDING",
        retryCount,
      },
    });
    return log.id;
  } catch (err) {
    console.error("[Worker] Failed to create SMSLog:", err);
    return "";
  }
}

async function updateSMSLog(
  id: string,
  status: "SUCCESS" | "FAILED",
  error?: string
): Promise<void> {
  if (!id) return;
  try {
    await prisma.smsLog.update({
      where: { id },
      data: { status, error: error || null },
    });
  } catch (err) {
    console.error(`[Worker] Failed to update SMSLog ${id}:`, err);
  }
}

const MAX_RETRIES = 3;

interface BookingEventPayload {
  to: string;
  customerName: string;
  bookingId: string;
  hotelName: string;
  roomType: string;
  checkInDate: string;
  checkOutDate?: string;
  totalPrice: string;
}

export const startNotificationWorker = async (): Promise<void> => {
  console.log(`[Worker] Notification Worker starting queue consumers...`);

  await rabbitMQ.consumeQueue(QUEUES.BOOKING_CREATED, async (msg) => {
    if (!msg) return;

    const retries = Number(msg.properties.headers?.["x-retries"] ?? 0);
    let payload: BookingEventPayload;

    try {
      payload = JSON.parse(msg.content.toString());
      if (!payload.to || !payload.bookingId || !payload.customerName) {
        throw new Error("Missing required payload fields: to, bookingId, customerName");
      }
    } catch (error) {
      console.error("[Worker] Invalid BookingCreated payload format. Message discarded.", error);
      rabbitMQ.nack(msg, false);
      return;
    }

    let logId = "";
    try {
      console.log(`[Worker] Processing BOOKING_CREATED for booking #${payload.bookingId} to ${payload.to} (Retry: ${retries}/${MAX_RETRIES})`);

      logId = await createEmailLog(
        payload.to,
        `Đặt phòng thành công #${payload.bookingId}`,
        "BOOKING_CREATED",
        retries
      );

      const params: Record<string, string> = {
        bookingId: payload.bookingId,
        customerName: payload.customerName,
        hotelName: payload.hotelName || "NestBooking Hotel",
        roomType: payload.roomType || "Standard Room",
        checkInDate: payload.checkInDate || "N/A",
        checkOutDate: payload.checkOutDate || "N/A",
        totalPrice: payload.totalPrice || "0 VND",
      };

      await emailService.sendTemplateEmail(payload.to, "BOOKING_CREATED", params);
      await updateEmailLog(logId, "SUCCESS");
      
      if ((payload as any).userId) {
        await saveAppNotification(
          (payload as any).userId,
          `Đặt phòng thành công #${payload.bookingId}`,
          `Phòng ${payload.roomType} tại ${payload.hotelName} đã được xác nhận. Check-in: ${payload.checkInDate}.`,
          "BOOKING_CREATED",
          { bookingId: payload.bookingId }
        );
      }

      rabbitMQ.ack(msg);
      console.log(`[Worker] BOOKING_CREATED notification sent successfully for #${payload.bookingId}`);
    } catch (error: any) {
      console.error(`[Worker] Error sending BOOKING_CREATED email for #${payload.bookingId}:`, error);
      await updateEmailLog(logId, "FAILED", error?.message || String(error));
      
      if (retries >= MAX_RETRIES) {
        console.error(`[Worker] BOOKING_CREATED for #${payload.bookingId} exceeded maximum retries. Discarded.`);
        rabbitMQ.nack(msg, false);
        return;
      }

      console.warn(`[Worker] Retrying BOOKING_CREATED for #${payload.bookingId} (${retries + 1}/${MAX_RETRIES})`);
      
      await rabbitMQ.sendToQueue(QUEUES.BOOKING_CREATED, payload, {
        headers: { "x-retries": retries + 1 }
      });
      
      rabbitMQ.ack(msg);
    }
  });

  await rabbitMQ.consumeQueue(QUEUES.BOOKING_CANCELLED, async (msg) => {
    if (!msg) return;

    const retries = Number(msg.properties.headers?.["x-retries"] ?? 0);
    let payload: BookingEventPayload;

    try {
      payload = JSON.parse(msg.content.toString());
      if (!payload.to || !payload.bookingId || !payload.customerName) {
        throw new Error("Missing required payload fields: to, bookingId, customerName");
      }
    } catch (error) {
      console.error("[Worker] Invalid BookingCancelled payload format. Message discarded.", error);
      rabbitMQ.nack(msg, false);
      return;
    }

    let logId = "";
    try {
      console.log(`[Worker] Processing BOOKING_CANCELLED for booking #${payload.bookingId} to ${payload.to} (Retry: ${retries}/${MAX_RETRIES})`);

      logId = await createEmailLog(
        payload.to,
        `Đơn đặt phòng #${payload.bookingId} đã bị hủy`,
        "BOOKING_CANCELLED",
        retries
      );

      const params: Record<string, string> = {
        bookingId: payload.bookingId,
        customerName: payload.customerName,
        hotelName: payload.hotelName || "NestBooking Hotel",
        roomType: payload.roomType || "Standard Room",
        checkInDate: payload.checkInDate || "N/A",
        totalPrice: payload.totalPrice || "0 VND",
      };

      await emailService.sendTemplateEmail(payload.to, "BOOKING_CANCELLED", params);
      await updateEmailLog(logId, "SUCCESS");

      if ((payload as any).userId) {
        await saveAppNotification(
          (payload as any).userId,
          `Đơn đặt phòng #${payload.bookingId} đã bị hủy`,
          `Phòng ${payload.roomType} tại ${payload.hotelName}. Check-in: ${payload.checkInDate}.`,
          "BOOKING_CANCELLED",
          { bookingId: payload.bookingId }
        );
      }

      rabbitMQ.ack(msg);
      console.log(`[Worker] BOOKING_CANCELLED notification sent successfully for #${payload.bookingId}`);
    } catch (error: any) {
      console.error(`[Worker] Error sending BOOKING_CANCELLED email for #${payload.bookingId}:`, error);
      await updateEmailLog(logId, "FAILED", error?.message || String(error));
      
      if (retries >= MAX_RETRIES) {
        console.error(`[Worker] BOOKING_CANCELLED for #${payload.bookingId} exceeded maximum retries. Discarded.`);
        rabbitMQ.nack(msg, false);
        return;
      }

      console.warn(`[Worker] Retrying BOOKING_CANCELLED for #${payload.bookingId} (${retries + 1}/${MAX_RETRIES})`);
      
      await rabbitMQ.sendToQueue(QUEUES.BOOKING_CANCELLED, payload, {
        headers: { "x-retries": retries + 1 }
      });
      
      rabbitMQ.ack(msg);
    }
  });

  await rabbitMQ.consumeQueue(QUEUES.SMS_OTP, async (msg) => {
    if (!msg) return;

    const retries = Number(msg.properties.headers?.["x-retries"] ?? 0);
    let payload: { to: string; message: string };

    try {
      payload = JSON.parse(msg.content.toString());
      if (!payload.to || !payload.message) {
        throw new Error("Missing required payload fields: to, message");
      }
    } catch (error) {
      console.error("[Worker] Invalid SmsOtp payload format. Message discarded.", error);
      rabbitMQ.nack(msg, false);
      return;
    }

    let logId = "";
    try {
      console.log(`[Worker] Processing SMS_OTP to ${payload.to} (Retry: ${retries}/${MAX_RETRIES})`);
      
      logId = await createSMSLog(payload.to, payload.message, retries);
      
      await smsService.sendSms(payload.to, payload.message);
      await updateSMSLog(logId, "SUCCESS");
      
      rabbitMQ.ack(msg);
      console.log(`[Worker] SMS_OTP sent successfully to ${payload.to}`);
    } catch (error: any) {
      console.error(`[Worker] Error sending SMS_OTP to ${payload.to}:`, error);
      await updateSMSLog(logId, "FAILED", error?.message || String(error));
      
      if (retries >= MAX_RETRIES) {
        console.error(`[Worker] SMS_OTP to ${payload.to} exceeded maximum retries. Discarded.`);
        rabbitMQ.nack(msg, false);
        return;
      }

      console.warn(`[Worker] Retrying SMS_OTP to ${payload.to} (${retries + 1}/${MAX_RETRIES})`);
      
      await rabbitMQ.sendToQueue(QUEUES.SMS_OTP, payload, {
        headers: { "x-retries": retries + 1 }
      });
      
      rabbitMQ.ack(msg);
    }
  });

  await rabbitMQ.consumeQueue(QUEUES.PUSH_NOTIFICATION, async (msg) => {
    if (!msg) return;

    const retries = Number(msg.properties.headers?.["x-retries"] ?? 0);
    let payload: { userId: string; title: string; body: string; data?: Record<string, string> };

    try {
      payload = JSON.parse(msg.content.toString());
      if (!payload.userId || !payload.title || !payload.body) {
        throw new Error("Missing required payload fields: userId, title, body");
      }
    } catch (error) {
      console.error("[Worker] Invalid PushNotification payload format. Message discarded.", error);
      rabbitMQ.nack(msg, false);
      return;
    }

    try {
      console.log(`[Worker] Processing PUSH_NOTIFICATION for user ${payload.userId} (Retry: ${retries}/${MAX_RETRIES})`);
      await pushNotificationService.sendPushToUser(payload.userId, payload.title, payload.body, payload.data);

      await saveAppNotification(
        payload.userId,
        payload.title,
        payload.body,
        "SYSTEM",
        payload.data ? { ...payload.data } : {}
      );

      rabbitMQ.ack(msg);
      console.log(`[Worker] PUSH_NOTIFICATION sent successfully for user ${payload.userId}`);
    } catch (error) {
      console.error(`[Worker] Error sending PUSH_NOTIFICATION for user ${payload.userId}:`, error);
      
      if (retries >= MAX_RETRIES) {
        console.error(`[Worker] PUSH_NOTIFICATION for user ${payload.userId} exceeded maximum retries. Discarded.`);
        rabbitMQ.nack(msg, false);
        return;
      }

      console.warn(`[Worker] Retrying PUSH_NOTIFICATION for user ${payload.userId} (${retries + 1}/${MAX_RETRIES})`);
      
      await rabbitMQ.sendToQueue(QUEUES.PUSH_NOTIFICATION, payload, {
        headers: { "x-retries": retries + 1 }
      });
      
      rabbitMQ.ack(msg);
    }
  });

  console.log(`[Worker] Notification Worker is listening to all queues!`);
};
