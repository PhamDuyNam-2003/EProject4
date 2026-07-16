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

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "order-service" });
});

app.use(errorHandler);

export default app;
