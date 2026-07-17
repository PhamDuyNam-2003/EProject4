import { rabbitMQ, QUEUES } from "../infrastructure/rabbitmq.js";
import { prisma } from "../infrastructure/database.js";
import { ActivityType } from "../../generated/prisma/index.js";

// ---------------------------------------------------------------------------
// Payload types (sent by booking-service / payment-service)
// ---------------------------------------------------------------------------
interface PaymentCompletedPayload {
  userId:    string;
  paymentId: string;
  bookingId: string;
  amount:    number;
}

interface BookingCreatedPayload {
  userId:    string;
  bookingId: string;
  hotelId:   string;
  amount?:   number;
}

interface BookingCancelledPayload {
  userId:    string;
  bookingId: string;
  hotelId?:  string;
  refundAmount?: number;
}

// ---------------------------------------------------------------------------
// Worker
// ---------------------------------------------------------------------------
export async function startAnalyticsWorker(): Promise<void> {
  console.log("[AnalyticsWorker] Starting workers for analytics queues...");

  // ---- 1. PaymentCompleted ----
  await rabbitMQ.consumeQueue(QUEUES.PAYMENT_COMPLETED, async (msg) => {
    if (!msg) return;
    try {
      const payload: PaymentCompletedPayload = JSON.parse(msg.content.toString());

      if (!payload.userId || !payload.paymentId) {
        console.error("[AnalyticsWorker] Invalid PaymentCompleted payload – discarding.");
        rabbitMQ.nack(msg, false);
        return;
      }

      await prisma.userActivityLog.create({
        data: {
          userId:       payload.userId,
          activityType: ActivityType.PAYMENT_COMPLETED,
          referenceId:  payload.paymentId,
          amount:       payload.amount ?? 0,
          metadata:     payload as any,
        },
      });

      rabbitMQ.ack(msg);
      console.log(`[AnalyticsWorker] ✅ Logged PAYMENT_COMPLETED – userId: ${payload.userId}, amount: ${payload.amount}`);
    } catch (err) {
      console.error("[AnalyticsWorker] ❌ Error handling PaymentCompleted:", err);
      rabbitMQ.nack(msg, true); // requeue
    }
  });

  // ---- 2. BookingCreated ----
  await rabbitMQ.consumeQueue(QUEUES.BOOKING_CREATED, async (msg) => {
    if (!msg) return;
    try {
      const payload: BookingCreatedPayload = JSON.parse(msg.content.toString());

      if (!payload.userId || !payload.bookingId) {
        console.error("[AnalyticsWorker] Invalid BookingCreated payload – discarding.");
        rabbitMQ.nack(msg, false);
        return;
      }

      await prisma.userActivityLog.create({
        data: {
          userId:       payload.userId,
          activityType: ActivityType.BOOKING_CREATED,
          referenceId:  payload.bookingId,
          amount:       payload.amount ?? null,
          metadata:     payload as any,
        },
      });

      rabbitMQ.ack(msg);
      console.log(`[AnalyticsWorker] ✅ Logged BOOKING_CREATED – bookingId: ${payload.bookingId}`);
    } catch (err) {
      console.error("[AnalyticsWorker] ❌ Error handling BookingCreated:", err);
      rabbitMQ.nack(msg, true);
    }
  });

  // ---- 3. BookingCancelled ----
  await rabbitMQ.consumeQueue(QUEUES.BOOKING_CANCELLED, async (msg) => {
    if (!msg) return;
    try {
      const payload: BookingCancelledPayload = JSON.parse(msg.content.toString());

      if (!payload.userId || !payload.bookingId) {
        console.error("[AnalyticsWorker] Invalid BookingCancelled payload – discarding.");
        rabbitMQ.nack(msg, false);
        return;
      }

      await prisma.userActivityLog.create({
        data: {
          userId:       payload.userId,
          activityType: ActivityType.BOOKING_CANCELLED,
          referenceId:  payload.bookingId,
          amount:       payload.refundAmount ?? null,
          metadata:     payload as any,
        },
      });

      rabbitMQ.ack(msg);
      console.log(`[AnalyticsWorker] ✅ Logged BOOKING_CANCELLED – bookingId: ${payload.bookingId}`);
    } catch (err) {
      console.error("[AnalyticsWorker] ❌ Error handling BookingCancelled:", err);
      rabbitMQ.nack(msg, true);
    }
  });

  console.log("[AnalyticsWorker] ✅ All analytics queue listeners active.");
}
