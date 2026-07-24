import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "./config/env.js";
import { setupChatSocket } from "./sockets/chatSocket.js";
import conversationRouter from "./routes/conversationRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { rabbitMQ } from "./infrastructure/rabbitmq/index.js";
import { emailService } from "./services/EmailService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "operation-service" });
});

app.use("/api/v1/conversations", conversationRouter);
app.use("/api/v1/conversations", messageRouter);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  pingTimeout: 60000,
});

setupChatSocket(io);

const startServer = async () => {
  try {
    console.log(`[Main] Connecting to MongoDB at ${env.MONGO_URI}...`);
    await mongoose.connect(env.MONGO_URI);
    console.log("[Main] Connected to MongoDB.");

    await rabbitMQ.connect();
    
    // Lắng nghe Booking Created để gửi Email và Cập nhật Lịch
    await rabbitMQ.consumeEvent("booking.events", "booking.created", "email_booking_created_queue", async (msg) => {
      console.log("[Main] Received booking.created event:", msg);
      io.emit("availability_changed", { hotelId: msg.hotelId });
      // Giả sử lấy email từ msg hoặc fetch lại, tạm thời lấy mock
      await emailService.sendBookingConfirmation("customer@example.com", msg);
    });

    // Lắng nghe Booking Cancelled để Cập nhật Lịch
    await rabbitMQ.consumeEvent("booking.events", "booking.cancelled", "calendar_booking_cancelled_queue", async (msg) => {
      console.log("[Main] Received booking.cancelled event:", msg);
      io.emit("availability_changed", { hotelId: msg.hotelId });
    });

    // Lắng nghe Booking Paid để gửi Email Hóa đơn
    await rabbitMQ.consumeEvent("booking.events", "booking.paid", "email_booking_paid_queue", async (msg) => {
      console.log("[Main] Received booking.paid event:", msg);
      await emailService.sendPaymentSuccess("customer@example.com", msg);
    });

    server.listen(env.PORT, () => {
      console.log(`[Main] Operation & Communication service running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("[Main] Failed to start service:", error);
    process.exit(1);
  }
};

startServer();

process.on("SIGINT", async () => {
  console.log("Shutting down service...");
  await mongoose.disconnect();
  await rabbitMQ.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Shutting down service...");
  await mongoose.disconnect();
  await rabbitMQ.close();
  process.exit(0);
});
