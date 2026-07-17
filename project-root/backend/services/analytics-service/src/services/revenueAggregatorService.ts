import { prisma } from "../infrastructure/database.js";
import { ReportType } from "../../generated/prisma/index.js";

// ---------------------------------------------------------------------------
// Helper – normalise a Date to midnight (00:00:00 UTC) for DB @db.Date fields
// ---------------------------------------------------------------------------
const toDateOnly = (d: Date): Date => {
  const out = new Date(d);
  out.setUTCHours(0, 0, 0, 0);
  return out;
};

// ---------------------------------------------------------------------------
// Daily Revenue Aggregation
// Tổng hợp toàn bộ UserActivityLog trong ngày rồi upsert vào RevenueReport
// Idempotent: unique(reportDate, DAILY) → upsert an toàn
// ---------------------------------------------------------------------------
export async function aggregateDailyRevenue(date: Date): Promise<number> {
  const dayStart = toDateOnly(date);
  const dayEnd   = new Date(dayStart);
  dayEnd.setUTCDate(dayEnd.getUTCDate() + 1);

  console.log(`[RevenueAggregator] Aggregating DAILY revenue for ${dayStart.toISOString().split("T")[0]}...`);

  // Tổng hợp từ UserActivityLog trong ngày
  const paymentStats = await prisma.userActivityLog.aggregate({
    where: {
      activityType: "PAYMENT_COMPLETED",
      occurredAt: { gte: dayStart, lt: dayEnd },
    },
    _sum:   { amount: true },
    _count: { id: true },
  });

  const refundStats = await prisma.userActivityLog.aggregate({
    where: {
      activityType: "PAYMENT_REFUNDED",
      occurredAt: { gte: dayStart, lt: dayEnd },
    },
    _sum: { amount: true },
  });

  const bookingCount = await prisma.userActivityLog.count({
    where: {
      activityType: "BOOKING_CREATED",
      occurredAt: { gte: dayStart, lt: dayEnd },
    },
  });

  const cancelledCount = await prisma.userActivityLog.count({
    where: {
      activityType: "BOOKING_CANCELLED",
      occurredAt: { gte: dayStart, lt: dayEnd },
    },
  });

  const totalRevenue  = paymentStats._sum.amount  ?? 0;
  const refundAmount  = refundStats._sum.amount    ?? 0;
  const netRevenue    = Number(totalRevenue) - Number(refundAmount);

  await prisma.revenueReport.upsert({
    where: {
      reportDate_reportType: {
        reportDate: dayStart,
        reportType: ReportType.DAILY,
      },
    },
    update: {
      totalRevenue,
      bookingCount,
      cancelledCount,
      refundAmount,
      netRevenue,
      generatedAt: new Date(),
    },
    create: {
      reportDate:    dayStart,
      reportType:    ReportType.DAILY,
      totalRevenue,
      bookingCount,
      cancelledCount,
      refundAmount,
      netRevenue,
    },
  });

  console.log(
    `[RevenueAggregator] DAILY done – revenue: ${totalRevenue}, net: ${netRevenue}, bookings: ${bookingCount}`
  );
  return bookingCount;
}

// ---------------------------------------------------------------------------
// Monthly Revenue Aggregation
// SUM từ RevenueReport DAILY trong tháng → upsert MONTHLY
// ---------------------------------------------------------------------------
export async function aggregateMonthlyRevenue(year: number, month: number): Promise<number> {
  const monthStart = toDateOnly(new Date(Date.UTC(year, month - 1, 1)));
  const monthEnd   = toDateOnly(new Date(Date.UTC(year, month,     1)));

  console.log(`[RevenueAggregator] Aggregating MONTHLY revenue for ${year}-${String(month).padStart(2, "0")}...`);

  const daily = await prisma.revenueReport.aggregate({
    where: {
      reportType: ReportType.DAILY,
      reportDate: { gte: monthStart, lt: monthEnd },
    },
    _sum:   { totalRevenue: true, refundAmount: true, netRevenue: true },
    _count: { id: true },
  });

  const bookingCount = await prisma.revenueReport.aggregate({
    where: {
      reportType: ReportType.DAILY,
      reportDate: { gte: monthStart, lt: monthEnd },
    },
    _sum: { bookingCount: true, cancelledCount: true },
  });

  const totalRevenue  = daily._sum.totalRevenue  ?? 0;
  const refundAmount  = daily._sum.refundAmount   ?? 0;
  const netRevenue    = daily._sum.netRevenue     ?? 0;
  const bCount        = bookingCount._sum.bookingCount   ?? 0;
  const cancelCount   = bookingCount._sum.cancelledCount ?? 0;

  await prisma.revenueReport.upsert({
    where: {
      reportDate_reportType: {
        reportDate: monthStart,
        reportType: ReportType.MONTHLY,
      },
    },
    update:  { totalRevenue, bookingCount: bCount, cancelledCount: cancelCount, refundAmount, netRevenue, generatedAt: new Date() },
    create:  { reportDate: monthStart, reportType: ReportType.MONTHLY, totalRevenue, bookingCount: bCount, cancelledCount: cancelCount, refundAmount, netRevenue },
  });

  console.log(`[RevenueAggregator] MONTHLY done – revenue: ${totalRevenue}, net: ${netRevenue}`);
  return bCount;
}

// ---------------------------------------------------------------------------
// Yearly Revenue Aggregation
// SUM từ RevenueReport MONTHLY trong năm → upsert YEARLY
// ---------------------------------------------------------------------------
export async function aggregateYearlyRevenue(year: number): Promise<number> {
  const yearStart = toDateOnly(new Date(Date.UTC(year,     0, 1)));
  const yearEnd   = toDateOnly(new Date(Date.UTC(year + 1, 0, 1)));

  console.log(`[RevenueAggregator] Aggregating YEARLY revenue for ${year}...`);

  const monthly = await prisma.revenueReport.aggregate({
    where: {
      reportType: ReportType.MONTHLY,
      reportDate: { gte: yearStart, lt: yearEnd },
    },
    _sum: { totalRevenue: true, refundAmount: true, netRevenue: true, bookingCount: true, cancelledCount: true },
  });

  const totalRevenue  = monthly._sum.totalRevenue  ?? 0;
  const refundAmount  = monthly._sum.refundAmount   ?? 0;
  const netRevenue    = monthly._sum.netRevenue     ?? 0;
  const bookingCount  = monthly._sum.bookingCount   ?? 0;
  const cancelCount   = monthly._sum.cancelledCount ?? 0;

  await prisma.revenueReport.upsert({
    where: {
      reportDate_reportType: {
        reportDate: yearStart,
        reportType: ReportType.YEARLY,
      },
    },
    update:  { totalRevenue, bookingCount, cancelledCount: cancelCount, refundAmount, netRevenue, generatedAt: new Date() },
    create:  { reportDate: yearStart, reportType: ReportType.YEARLY, totalRevenue, bookingCount, cancelledCount: cancelCount, refundAmount, netRevenue },
  });

  console.log(`[RevenueAggregator] YEARLY done – revenue: ${totalRevenue}, net: ${netRevenue}`);
  return bookingCount;
}
