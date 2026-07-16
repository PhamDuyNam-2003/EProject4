import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { prisma } from "./infrastructure/database.js";
import { rabbitMQ } from "./infrastructure/rabbitmq.js";
import { startNotificationWorker } from "./workers/notificationWorker.js";
import deviceRouter from "./routes/deviceRoutes.js";
import notificationRouter from "./routes/notificationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "notification-service" });
});

// GET /api/v1/templates
app.get("/api/v1/templates", async (req, res) => {
  try {
    const templates = await prisma.notificationTemplate.findMany();
    res.json(templates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/templates
app.post("/api/v1/templates", async (req, res) => {
  try {
    const { code, subject, body } = req.body;
    if (!code || !subject || !body) {
       res.status(400).json({ error: "Missing code, subject or body in request" });
       return;
    }
    const template = await prisma.notificationTemplate.upsert({
      where: { code },
      update: { subject, body },
      create: { code, subject, body },
    });
    res.status(201).json(template);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Mount Routers
app.use("/api/v1/devices", deviceRouter);
app.use("/api/v1/notifications", notificationRouter);

const startServer = async () => {
  try {
    // 1. Connect database & test connection
    await prisma.$connect();
    console.log("[Main] Connected to database.");

    // 2. Connect to RabbitMQ
    await rabbitMQ.connect();

    // 3. Start workers
    await startNotificationWorker();

    // 4. Start HTTP Server
    app.listen(env.PORT, () => {
      console.log(`[Main] Notification HTTP service running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("[Main] Failed to start notification service:", error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down service...");
  await rabbitMQ.close();
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Shutting down service...");
  await rabbitMQ.close();
  await prisma.$disconnect();
  process.exit(0);
});
