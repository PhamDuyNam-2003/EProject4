import { PrismaClient } from "../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "",
});

const prisma = new PrismaClient({ adapter });


async function main() {
  console.log("Seeding notification templates...");

  const createdBody = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đặt phòng thành công</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f3f4f6;
      margin: 0;
      padding: 0;
      color: #1f2937;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      padding: 40px 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 10px 0 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #111827;
    }
    .intro {
      font-size: 15px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 30px;
    }
    .card {
      background-color: #f9fafb;
      border: 1px solid #f3f4f6;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 30px;
    }
    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      margin-top: 0;
      margin-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 12px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 14px;
    }
    .info-row:last-child {
      margin-bottom: 0;
    }
    .info-label {
      color: #6b7280;
      font-weight: 500;
    }
    .info-value {
      color: #111827;
      font-weight: 600;
      text-align: right;
    }
    .price-row {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px dashed #e5e7eb;
    }
    .price-value {
      font-size: 18px;
      color: #4f46e5;
      font-weight: 700;
    }
    .button-container {
      text-align: center;
      margin-bottom: 30px;
    }
    .btn {
      display: inline-block;
      background-color: #4f46e5;
      color: #ffffff !important;
      text-decoration: none;
      padding: 14px 30px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 15px;
      box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
      transition: background-color 0.2s ease;
    }
    .footer {
      background-color: #f9fafb;
      padding: 24px 30px;
      text-align: center;
      font-size: 13px;
      color: #9ca3af;
      border-top: 1px solid #f3f4f6;
    }
    .footer p {
      margin: 4px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Đặt Phòng Thành Công!</h1>
      <p>Mã đơn hàng: #{{bookingId}}</p>
    </div>
    <div class="content">
      <div class="greeting">Xin chào {{customerName}},</div>
      <div class="intro">
        Yêu cầu đặt phòng của bạn đã được xác nhận thành công. Dưới đây là thông tin chi tiết về phòng của bạn tại <strong>NestBooking</strong>:
      </div>
      
      <div class="card">
        <div class="card-title">Thông Tin Chi Tiết Đơn Phòng</div>
        <div class="info-row">
          <span class="info-label">Khách sạn:</span>
          <span class="info-value">{{hotelName}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Hạng phòng:</span>
          <span class="info-value">{{roomType}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Ngày nhận phòng (Check-in):</span>
          <span class="info-value">{{checkInDate}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Ngày trả phòng (Check-out):</span>
          <span class="info-value">{{checkOutDate}}</span>
        </div>
        <div class="info-row price-row">
          <span class="info-label" style="font-size: 16px; font-weight: 700; color: #111827;">Tổng thanh toán:</span>
          <span class="info-value price-value">{{totalPrice}}</span>
        </div>
      </div>

      <div class="button-container">
        <a href="{{bookingUrl}}" class="btn">Xem chi tiết trên Website</a>
      </div>

      <div style="font-size: 14px; color: #6b7280; line-height: 1.6; text-align: center;">
        Vui lòng chuẩn bị giấy tờ tùy thân (CCCD/Hộ chiếu) khi làm thủ tục nhận phòng tại khách sạn. Chúc bạn có một chuyến đi tuyệt vời!
      </div>
    </div>
    <div class="footer">
      <p>Email này được gửi tự động từ hệ thống đặt phòng NestBooking.</p>
      <p>&copy; 2026 NestBooking. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const cancelledBody = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hủy đặt phòng thành công</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f3f4f6;
      margin: 0;
      padding: 0;
      color: #1f2937;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
      padding: 40px 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 10px 0 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #111827;
    }
    .intro {
      font-size: 15px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 30px;
    }
    .card {
      background-color: #f9fafb;
      border: 1px solid #f3f4f6;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 30px;
    }
    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      margin-top: 0;
      margin-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 12px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 14px;
    }
    .info-row:last-child {
      margin-bottom: 0;
    }
    .info-label {
      color: #6b7280;
      font-weight: 500;
    }
    .info-value {
      color: #111827;
      font-weight: 600;
      text-align: right;
    }
    .refund-info {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px dashed #e5e7eb;
    }
    .refund-value {
      font-size: 18px;
      color: #ef4444;
      font-weight: 700;
    }
    .footer {
      background-color: #f9fafb;
      padding: 24px 30px;
      text-align: center;
      font-size: 13px;
      color: #9ca3af;
      border-top: 1px solid #f3f4f6;
    }
    .footer p {
      margin: 4px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Đã Hủy Đơn Đặt Phòng</h1>
      <p>Mã đơn hàng: #{{bookingId}}</p>
    </div>
    <div class="content">
      <div class="greeting">Xin chào {{customerName}},</div>
      <div class="intro">
        Chúng tôi xác nhận rằng đơn đặt phòng mã số <strong>#{{bookingId}}</strong> của bạn đã được hủy thành công theo yêu cầu.
      </div>
      
      <div class="card">
        <div class="card-title">Thông Tin Đơn Phòng Đã Hủy</div>
        <div class="info-row">
          <span class="info-label">Khách sạn:</span>
          <span class="info-value">{{hotelName}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Hạng phòng:</span>
          <span class="info-value">{{roomType}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Thời gian dự kiến nhận phòng:</span>
          <span class="info-value">{{checkInDate}}</span>
        </div>
        <div class="info-row refund-info">
          <span class="info-label" style="font-size: 16px; font-weight: 700; color: #111827;">Số tiền đã thanh toán:</span>
          <span class="info-value refund-value">{{totalPrice}}</span>
        </div>
      </div>

      <div style="font-size: 14px; color: #6b7280; line-height: 1.6; text-align: center;">
        Nếu đơn phòng này đủ điều kiện được hoàn tiền, số tiền hoàn trả sẽ được chuyển vào tài khoản thanh toán của bạn trong vòng 3-5 ngày làm việc theo quy định của ngân hàng.
      </div>
    </div>
    <div class="footer">
      <p>Email này được gửi tự động từ hệ thống đặt phòng NestBooking.</p>
      <p>&copy; 2026 NestBooking. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  await prisma.notificationTemplate.upsert({
    where: { code: "BOOKING_CREATED" },
    update: {
      subject: "Xác nhận đặt phòng thành công - Đơn hàng #{{bookingId}}",
      body: createdBody,
    },
    create: {
      code: "BOOKING_CREATED",
      subject: "Xác nhận đặt phòng thành công - Đơn hàng #{{bookingId}}",
      body: createdBody,
    },
  });

  await prisma.notificationTemplate.upsert({
    where: { code: "BOOKING_CANCELLED" },
    update: {
      subject: "Đã hủy đơn đặt phòng thành công - Đơn hàng #{{bookingId}}",
      body: cancelledBody,
    },
    create: {
      code: "BOOKING_CANCELLED",
      subject: "Đã hủy đơn đặt phòng thành công - Đơn hàng #{{bookingId}}",
      body: cancelledBody,
    },
  });

  console.log("Templates seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
