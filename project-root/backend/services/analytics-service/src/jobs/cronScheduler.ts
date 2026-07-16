import cron from "node-cron";
import { prisma } from "../infrastructure/database.js";
import { env } from "../config/env.js";
import {
  aggregateDailyRevenue,
  aggregateMonthlyRevenue,
  aggregateYearlyRevenue,
} from "../services/revenueAggregatorService.js";
import { JobStatus } from "../../generated/prisma/index.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type JobName = "DAILY_REVENUE" | "MONTHLY_REVENUE" | "YEARLY_REVENUE";

// ---------------------------------------------------------------------------
// Core: idempotent job runner
// Checks JobExecutionLog before running – skips if already SUCCESS for that date
// Records RUNNING → SUCCESS | FAILED with execution time
// ---------------------------------------------------------------------------
export async function runJob(jobName: JobName, jobDate: Date): Promise<void> {
  const dateOnly = new Date(jobDate);
  dateOnly.setUTCHours(0, 0, 0, 0);

  // --- Check idempotency ---
  const existing = await prisma.jobExecutionLog.findUnique({
    where: { jobName_jobDate: { jobName, jobDate: dateOnly } },
  });

  if (existing?.status === JobStatus.SUCCESS) {
    console.log(
      `[CronScheduler] ⏭️  Job "${jobName}" for ${dateOnly.toISOString().split("T")[0]} already completed – SKIPPED.`
    );
    return;
  }

  // --- Create/update log entry as RUNNING ---
  const logEntry = await prisma.jobExecutionLog.upsert({
    where: { jobName_jobDate: { jobName, jobDate: dateOnly } },
    update: { status: JobStatus.RUNNING, startedAt: new Date(), errorMessage: null, finishedAt: null },
    create: { jobName, jobDate: dateOnly, status: JobStatus.RUNNING },
  });

  const startTime = Date.now();
  console.log(`[CronScheduler] 🚀 Starting job "${jobName}" for ${dateOnly.toISOString().split("T")[0]}...`);

  try {
    let recordsAffected = 0;

    if (jobName === "DAILY_REVENUE") {
      recordsAffected = await aggregateDailyRevenue(dateOnly);
    } else if (jobName === "MONTHLY_REVENUE") {
      const year  = dateOnly.getUTCFullYear();
      const month = dateOnly.getUTCMonth() + 1;
      recordsAffected = await aggregateMonthlyRevenue(year, month);
    } else if (jobName === "YEARLY_REVENUE") {
      const year = dateOnly.getUTCFullYear();
      recordsAffected = await aggregateYearlyRevenue(year);
    }

    const executionTimeMs = Date.now() - startTime;

    await prisma.jobExecutionLog.update({
      where: { id: logEntry.id },
      data: {
        status:          JobStatus.SUCCESS,
        executionTimeMs,
        recordsAffected,
        finishedAt:      new Date(),
      },
    });

    console.log(
      `[CronScheduler] ✅ Job "${jobName}" completed in ${executionTimeMs}ms – ${recordsAffected} records affected.`
    );
  } catch (error: any) {
    const executionTimeMs = Date.now() - startTime;
    const errorMessage    = error?.message ?? String(error);

    await prisma.jobExecutionLog.update({
      where: { id: logEntry.id },
      data: {
        status:       JobStatus.FAILED,
        executionTimeMs,
        errorMessage,
        finishedAt:   new Date(),
      },
    });

    console.error(
      `[CronScheduler] ❌ Job "${jobName}" FAILED after ${executionTimeMs}ms: ${errorMessage}`
    );
  }
}

// ---------------------------------------------------------------------------
// Schedule all cron jobs
// ---------------------------------------------------------------------------
export function startCronScheduler(): void {
  const tz = env.CRON_TIMEZONE;

  console.log("[CronScheduler] Registering cron jobs...");
  console.log(`  📅 DAILY_REVENUE   → "${env.CRON_DAILY_REVENUE}"   (tz: ${tz})`);
  console.log(`  📅 MONTHLY_REVENUE → "${env.CRON_MONTHLY_REVENUE}" (tz: ${tz})`);
  console.log(`  📅 YEARLY_REVENUE  → "${env.CRON_YEARLY_REVENUE}"  (tz: ${tz})`);

  // ------- Daily Revenue Job -------
  cron.schedule(
    env.CRON_DAILY_REVENUE,
    async () => {
      // Aggregate YESTERDAY (the just-completed day)
      const yesterday = new Date();
      yesterday.setUTCDate(yesterday.getUTCDate() - 1);
      await runJob("DAILY_REVENUE", yesterday);
    },
    { timezone: tz }
  );

  // ------- Monthly Revenue Job -------
  cron.schedule(
    env.CRON_MONTHLY_REVENUE,
    async () => {
      // Aggregate LAST month
      const lastMonth = new Date();
      lastMonth.setUTCDate(0); // last day of previous month
      await runJob("MONTHLY_REVENUE", lastMonth);
    },
    { timezone: tz }
  );

  // ------- Yearly Revenue Job -------
  cron.schedule(
    env.CRON_YEARLY_REVENUE,
    async () => {
      // Aggregate LAST year
      const lastYear = new Date();
      lastYear.setUTCFullYear(lastYear.getUTCFullYear() - 1);
      await runJob("YEARLY_REVENUE", lastYear);
    },
    { timezone: tz }
  );

  console.log("[CronScheduler] ✅ All cron jobs registered and running.");
}
