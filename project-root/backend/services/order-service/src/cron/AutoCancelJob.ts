import cron from "node-cron";
import { prisma } from "@/config/prisma.js";
import logger from "@/utils/logger.js";
import { rabbitMQ } from "@/infrastructure/rabbitmq/index.js";

export const startAutoCancelJob = () => {
  // Chạy mỗi phút 1 lần
  cron.schedule("* * * * *", async () => {
    logger.info("[CronJob] Checking for expired pending bookings...");

    try {
      // Tìm các booking PENDING đã tạo quá 15 phút
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);

      const expiredBookings = await prisma.booking.findMany({
        where: {
          status: "PENDING",
          paymentStatus: "UNPAID",
          createdAt: {
            lt: fifteenMinutesAgo
          }
        }
      });

      if (expiredBookings.length === 0) return;

      logger.info(`[CronJob] Found ${expiredBookings.length} expired bookings to cancel.`);

      for (const booking of expiredBookings) {
        await prisma.$transaction(async (tx) => {
          await tx.booking.update({
            where: { id: booking.id },
            data: { status: "CANCELLED" }
          });

          await tx.bookingHistory.create({
            data: {
              bookingId: booking.id,
              action: "AUTO_CANCELLED",
              note: "Hủy tự động do quá hạn thanh toán 15 phút",
              createdBy: null // System
            }
          });
        });

        // Publish event RoomRelease
        await rabbitMQ.publishEvent("booking.events", "booking.cancelled", {
          bookingId: booking.id,
          hotelId: booking.hotelId,
          reason: "PAYMENT_TIMEOUT"
        });
        
        logger.info(`[CronJob] Auto cancelled booking ${booking.id}`);
      }
    } catch (error) {
      logger.error("[CronJob] Error in auto cancel job:", error);
    }
  });
};
