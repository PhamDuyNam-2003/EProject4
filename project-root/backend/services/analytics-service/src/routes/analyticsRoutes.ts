import { Router, Request, Response } from "express";
import { prisma } from "../infrastructure/database.js";
import { runJob } from "../jobs/cronScheduler.js";
import { ReportType } from "../../generated/prisma/index.js";

const router = Router();

// ---------------------------------------------------------------------------
// GET /api/v1/analytics/dashboard
// Tổng quan doanh thu (tổng hợp daily trong date range)
// ---------------------------------------------------------------------------
router.get("/dashboard", async (req: Request, res: Response) => {
  try {
    const { from, to } = req.query;

    const fromDate = from ? new Date(from as string) : (() => { const d = new Date(); d.setDate(d.getDate() - 30); return d; })();
    const toDate   = to   ? new Date(to   as string) : new Date();

    fromDate.setUTCHours(0, 0, 0, 0);
    toDate.setUTCHours(23, 59, 59, 999);

    const reports = await prisma.revenueReport.findMany({
      where: {
        reportType: ReportType.DAILY,
        reportDate: { gte: fromDate, lte: toDate },
      },
      orderBy: { reportDate: "asc" },
    });

    const summary = reports.reduce(
      (acc, r) => ({
        totalRevenue:  acc.totalRevenue  + Number(r.totalRevenue),
        netRevenue:    acc.netRevenue    + Number(r.netRevenue),
        refundAmount:  acc.refundAmount  + Number(r.refundAmount),
        bookingCount:  acc.bookingCount  + r.bookingCount,
        cancelledCount: acc.cancelledCount + r.cancelledCount,
      }),
      { totalRevenue: 0, netRevenue: 0, refundAmount: 0, bookingCount: 0, cancelledCount: 0 }
    );

    res.json({ summary, daily: reports, from: fromDate, to: toDate });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------------------------------------
// GET /api/v1/analytics/revenue/daily?year=2026&month=7
// ---------------------------------------------------------------------------
router.get("/revenue/daily", async (req: Request, res: Response) => {
  try {
    const year  = parseInt(req.query.year  as string) || new Date().getUTCFullYear();
    const month = parseInt(req.query.month as string) || new Date().getUTCMonth() + 1;

    const from = new Date(Date.UTC(year, month - 1, 1));
    const to   = new Date(Date.UTC(year, month,     1));

    const reports = await prisma.revenueReport.findMany({
      where: { reportType: ReportType.DAILY, reportDate: { gte: from, lt: to } },
      orderBy: { reportDate: "asc" },
    });

    res.json({ year, month, count: reports.length, reports });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------------------------------------
// GET /api/v1/analytics/revenue/monthly?year=2026
// ---------------------------------------------------------------------------
router.get("/revenue/monthly", async (req: Request, res: Response) => {
  try {
    const year = parseInt(req.query.year as string) || new Date().getUTCFullYear();

    const from = new Date(Date.UTC(year,     0, 1));
    const to   = new Date(Date.UTC(year + 1, 0, 1));

    const reports = await prisma.revenueReport.findMany({
      where: { reportType: ReportType.MONTHLY, reportDate: { gte: from, lt: to } },
      orderBy: { reportDate: "asc" },
    });

    res.json({ year, count: reports.length, reports });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------------------------------------
// GET /api/v1/analytics/revenue/yearly
// ---------------------------------------------------------------------------
router.get("/revenue/yearly", async (_req: Request, res: Response) => {
  try {
    const reports = await prisma.revenueReport.findMany({
      where:   { reportType: ReportType.YEARLY },
      orderBy: { reportDate: "asc" },
    });
    res.json({ count: reports.length, reports });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------------------------------------
// GET /api/v1/analytics/activity-logs?userId=&limit=50&page=1
// ---------------------------------------------------------------------------
router.get("/activity-logs", async (req: Request, res: Response) => {
  try {
    const userId = req.query.userId as string | undefined;
    const limit  = Math.min(parseInt(req.query.limit as string) || 50, 200);
    const page   = Math.max(parseInt(req.query.page  as string) || 1, 1);
    const skip   = (page - 1) * limit;

    const where = userId ? { userId } : {};

    const [logs, total] = await Promise.all([
      prisma.userActivityLog.findMany({
        where,
        orderBy: { occurredAt: "desc" },
        take:  limit,
        skip,
      }),
      prisma.userActivityLog.count({ where }),
    ]);

    res.json({ total, page, limit, totalPages: Math.ceil(total / limit), logs });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------------------------------------
// GET /api/v1/analytics/jobs
// Danh sách lịch sử chạy job
// ---------------------------------------------------------------------------
router.get("/jobs", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 20, 100);
    const logs  = await prisma.jobExecutionLog.findMany({
      orderBy: { startedAt: "desc" },
      take: limit,
    });
    res.json({ count: logs.length, logs });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------------------------------------
// POST /api/v1/analytics/jobs/trigger
// Trigger thủ công để test mà không phải chờ cron
// Body: { "jobName": "DAILY_REVENUE" | "MONTHLY_REVENUE" | "YEARLY_REVENUE", "date": "2026-07-15" }
// ---------------------------------------------------------------------------
router.post("/jobs/trigger", async (req: Request, res: Response) => {
  try {
    const { jobName, date } = req.body as {
      jobName: "DAILY_REVENUE" | "MONTHLY_REVENUE" | "YEARLY_REVENUE";
      date?:   string;
    };

    const VALID_JOBS = ["DAILY_REVENUE", "MONTHLY_REVENUE", "YEARLY_REVENUE"];
    if (!jobName || !VALID_JOBS.includes(jobName)) {
      res.status(400).json({
        error: `jobName must be one of: ${VALID_JOBS.join(", ")}`,
      });
      return;
    }

    const targetDate = date ? new Date(date) : new Date();
    targetDate.setUTCHours(0, 0, 0, 0);

    // Run without blocking the HTTP response – fire and forget
    setImmediate(() => {
      runJob(jobName, targetDate).catch(console.error);
    });

    res.json({
      message:    `Job "${jobName}" triggered for date: ${targetDate.toISOString().split("T")[0]}`,
      note:       "Job is running in background. Check GET /api/v1/analytics/jobs for status.",
      targetDate: targetDate.toISOString().split("T")[0],
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
