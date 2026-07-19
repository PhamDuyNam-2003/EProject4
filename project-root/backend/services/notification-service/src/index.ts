import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { prisma } from "./infrastructure/database.js";
import { rabbitMQ } from "./infrastructure/rabbitmq.js";
import { startNotificationWorker } from "./workers/notificationWorker.js";
import deviceRouter from "./routes/deviceRoutes.js";
import notificationRouter from "./routes/notificationRoutes.js";
import appNotificationRouter from "./routes/appNotificationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ─── Validate UUID helper ─────────────────────────────────────────────────────
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const isValidUUID = (id: string) => UUID_REGEX.test(id);

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "notification-service" });
});

// ─────────────────────────────────────────────────────────────────────────────
// NOTIFICATION TEMPLATE CRUD
// ─────────────────────────────────────────────────────────────────────────────

// GET /api/v1/templates — Lấy tất cả templates
app.get("/api/v1/templates", async (req, res) => {
  try {
    const { type, isActive } = req.query;
    const templates = await prisma.notificationTemplate.findMany({
      where: {
        ...(type ? { type: type as any } : {}),
        ...(isActive !== undefined ? { isActive: isActive === "true" } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(templates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v1/templates/:id — Lấy 1 template theo ID
app.get("/api/v1/templates/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid id format (must be UUID)" });
      return;
    }
    const template = await prisma.notificationTemplate.findUnique({ where: { id } });
    if (!template) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    res.json(template);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/templates — Tạo hoặc cập nhật template (upsert by code)
app.post("/api/v1/templates", async (req, res) => {
  try {
    const { code, type, subject, body, isActive } = req.body;
    if (!code || !subject || !body) {
      res.status(400).json({ error: "Missing required fields: code, subject, body" });
      return;
    }
    const template = await prisma.notificationTemplate.upsert({
      where: { code },
      update: { subject, body, ...(type ? { type } : {}), ...(isActive !== undefined ? { isActive } : {}) },
      create: { code, subject, body, type: type || "EMAIL", isActive: isActive ?? true },
    });
    res.status(201).json(template);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/v1/templates/:id — Cập nhật template theo ID
app.put("/api/v1/templates/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid id format (must be UUID)" });
      return;
    }
    const existing = await prisma.notificationTemplate.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    const { code, type, subject, body, isActive } = req.body;
    const updated = await prisma.notificationTemplate.update({
      where: { id },
      data: {
        ...(code !== undefined ? { code } : {}),
        ...(type !== undefined ? { type } : {}),
        ...(subject !== undefined ? { subject } : {}),
        ...(body !== undefined ? { body } : {}),
        ...(isActive !== undefined ? { isActive } : {}),
      },
    });
    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /api/v1/templates/:id/toggle — Bật/tắt template
app.patch("/api/v1/templates/:id/toggle", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid id format (must be UUID)" });
      return;
    }
    const existing = await prisma.notificationTemplate.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    const updated = await prisma.notificationTemplate.update({
      where: { id },
      data: { isActive: !existing.isActive },
    });
    res.json({ message: `Template ${updated.isActive ? "activated" : "deactivated"}`, template: updated });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/v1/templates/:id — Xóa template
app.delete("/api/v1/templates/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid id format (must be UUID)" });
      return;
    }
    const existing = await prisma.notificationTemplate.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    await prisma.notificationTemplate.delete({ where: { id } });
    res.json({ message: "Template deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// MOUNT ROUTERS
// ─────────────────────────────────────────────────────────────────────────────
app.use("/api/v1/devices", deviceRouter);
app.use("/api/v1/notifications", notificationRouter);
app.use("/api/v1/app-notifications", appNotificationRouter);

// ─────────────────────────────────────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────────────────────────────────────
const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("[Main] Connected to database.");

    await rabbitMQ.connect();
    await startNotificationWorker();

    app.listen(env.PORT, () => {
      console.log(`[Main] Notification HTTP service running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("[Main] Failed to start notification service:", error);
    process.exit(1);
  }
};

startServer();

// ─── Graceful Shutdown ────────────────────────────────────────────────────────
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
