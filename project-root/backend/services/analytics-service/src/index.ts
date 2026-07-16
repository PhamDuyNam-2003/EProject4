import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { prisma } from "./infrastructure/database.js";
import { rabbitMQ } from "./infrastructure/rabbitmq.js";
import { startAnalyticsWorker } from "./workers/analyticsWorker.js";
import { startCronScheduler } from "./jobs/cronScheduler.js";
import analyticsRouter from "./routes/analyticsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ---------------------------------------------------------------------------
// Health check
// ---------------------------------------------------------------------------
app.get("/health", (_req, res) => {
  res.json({
    status:  "UP",
    service: "analytics-service",
    time:    new Date().toISOString(),
  });
});

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
app.use("/api/v1/analytics", analyticsRouter);

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------
const bootstrap = async (): Promise<void> => {
  try {
    // 1. Connect to PostgreSQL
    await prisma.$connect();
    console.log("[Main] ✅ Connected to analytics_db.");

    // 2. Connect to RabbitMQ
    await rabbitMQ.connect();

    // 3. Start event consumers
    await startAnalyticsWorker();

    // 4. Register cron jobs
    startCronScheduler();

    // 5. Start HTTP server
    app.listen(env.PORT, () => {
      console.log(`[Main] ✅ Analytics service running on port ${env.PORT}`);
      console.log(`[Main]    Dashboard: http://localhost:${env.PORT}/api/v1/analytics/dashboard`);
      console.log(`[Main]    Job trigger: POST http://localhost:${env.PORT}/api/v1/analytics/jobs/trigger`);
    });
  } catch (err) {
    console.error("[Main] ❌ Failed to start analytics service:", err);
    process.exit(1);
  }
};

bootstrap();

// ---------------------------------------------------------------------------
// Graceful shutdown
// ---------------------------------------------------------------------------
const shutdown = async (signal: string): Promise<void> => {
  console.log(`\n[Main] Received ${signal} – shutting down gracefully...`);
  await rabbitMQ.close();
  await prisma.$disconnect();
  process.exit(0);
};

process.on("SIGINT",  () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
