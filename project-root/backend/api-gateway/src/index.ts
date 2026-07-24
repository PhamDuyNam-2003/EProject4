import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { createProxyMiddleware, Options } from "http-proxy-middleware";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware bảo mật và logging
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

// Giới hạn request (Rate limiting)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 100, // Limit mỗi IP 100 requests / 15 phút
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes",
  },
});
app.use(limiter);

// Cấu hình Proxy Routes
const setupProxy = (path: string, targetUrl: string) => {
  const proxyOptions: Options = {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: (p, req) => (req as express.Request).originalUrl,
    on: {
      error: (err, req, res) => {
        console.error(`Proxy Error for ${path}:`, err);
        if ('headersSent' in res && !res.headersSent) {
          (res as Response).status(502).json({
            success: false,
            message: `Bad Gateway: Unable to route to ${path}`,
          });
        }
      }
    },
  };
  app.use(path, createProxyMiddleware(proxyOptions));
};

// Định tuyến các microservices (đọc từ env hoặc dùng giá trị mặc định)
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://auth_api:3000";
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || "http://order_api:3002";
const ANALYTICS_SERVICE_URL = process.env.ANALYTICS_SERVICE_URL || "http://analytics_api:3003";
const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL || "http://notification_api:3004";
const CATALOG_SERVICE_URL = process.env.CATALOG_SERVICE_URL || "http://catalog_api:3005";
const OPERATION_SERVICE_URL = process.env.OPERATION_SERVICE_URL || "http://operation_api:3006";

setupProxy("/api/auth", AUTH_SERVICE_URL);
setupProxy("/api/users", AUTH_SERVICE_URL); // Tùy chọn nếu user thuộc auth-service
setupProxy("/api/orders", ORDER_SERVICE_URL);
setupProxy("/api/bookings", ORDER_SERVICE_URL); // Tùy chọn nếu bookings thuộc order
setupProxy("/api/payment", ORDER_SERVICE_URL); // Thêm payment
setupProxy("/api/analytics", ANALYTICS_SERVICE_URL);
setupProxy("/api/notifications", NOTIFICATION_SERVICE_URL);
setupProxy("/api/v1/notifications", NOTIFICATION_SERVICE_URL);
setupProxy("/api/v1/app-notifications", NOTIFICATION_SERVICE_URL);
setupProxy("/api/v1/devices", NOTIFICATION_SERVICE_URL);
setupProxy("/api/hotels", CATALOG_SERVICE_URL); // Thêm catalog
setupProxy("/api/chat", OPERATION_SERVICE_URL); // Tùy chọn nếu chat thuộc operation
setupProxy("/api/conversations", OPERATION_SERVICE_URL);

// Route kiểm tra sức khỏe Gateway
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API Gateway is running smoothly",
    timestamp: new Date().toISOString(),
  });
});

// Bắt lỗi 404 cho các route không tồn tại
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found in API Gateway",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway is running on port ${PORT}`);
  console.log(`Auth Service     -> ${AUTH_SERVICE_URL}`);
  console.log(`Order Service    -> ${ORDER_SERVICE_URL}`);
  console.log(`Analytics Service-> ${ANALYTICS_SERVICE_URL}`);
  console.log(`Operation Service-> ${OPERATION_SERVICE_URL}`);
});
