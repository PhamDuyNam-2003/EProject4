import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { globalLimiter } from "@/middlewares/rateLimitMiddleware";
import { errorHandler } from "@/middlewares/errorMiddleware";

const app = express();
app.use(helmet());
app.use(globalLimiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

import bookingRouter from "@/modules/booking/BookingRouter.js";
import paymentRouter from "@/modules/payment/PaymentRouter.js";

app.use("/api/bookings", bookingRouter);
app.use("/api/payment", paymentRouter);

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Load swagger files
const bookingSwagger = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "src/modules/booking/docs/swagger-booking.json"), "utf8"));
const paymentSwagger = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "src/modules/payment/docs/swagger-payment.json"), "utf8"));

app.use("/api-docs/booking", swaggerUi.serveFiles(bookingSwagger), swaggerUi.setup(bookingSwagger));
app.use("/api-docs/payment", swaggerUi.serveFiles(paymentSwagger), swaggerUi.setup(paymentSwagger));

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "order-service" });
});

app.use(errorHandler);

export default app;
