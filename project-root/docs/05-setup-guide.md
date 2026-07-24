# 05. Setup Guide - Hướng dẫn cài đặt dự án

## Yêu cầu hệ thống
- **Docker** & **Docker Compose**
- **Node.js** v18+ (để phát triển các service Node.js)
- **Flutter SDK** (để chạy ứng dụng Mobile/Web App Frontend)
- **.NET 7 SDK** (để phát triển service Analytics)

## Bước 1: Khởi động Backend (Microservices)
Dự án sử dụng Docker Compose để đóng gói toàn bộ Database (PostgreSQL, MongoDB), Message Broker (RabbitMQ), Cache (Redis) và các Services.

Mở terminal và chạy lệnh sau tại thư mục gốc:
```bash
cd backend
docker-compose up -d --build
```
Hệ thống sẽ tự động tải các image và khởi động:
- Các database PostgreSQL cho từng service (Identity, Inventory, Order, Analytics, Notification).
- CSDL MongoDB cho Operation service.
- RabbitMQ và Redis.
- 6 API Services và 1 API Gateway (lắng nghe ở cổng `8080`).
- **pgAdmin** (truy cập `http://localhost:5050` tài khoản `admin@admin.com` / mật khẩu `admin`)
- **MongoExpress** (truy cập `http://localhost:8081` tài khoản `admin` / mật khẩu `adminpassword`)

## Bước 2: Import Dữ liệu mẫu (Seed Database)
Hệ thống cần có dữ liệu mẫu (Khách sạn, Loại phòng, User) để hoạt động ngay.
Có 2 cách để nạp dữ liệu:
1. **Dùng lệnh Seed tự động (Khuyên dùng):**
   ```bash
   cd backend/services/catalog-service
   npm run seed
   ```
2. **Import thủ công qua file SQL:**
   Sử dụng file `seed_database.sql` đính kèm ở thư mục gốc của dự án. Mở **pgAdmin** trên trình duyệt, kết nối tới các database (ví dụ `inventory_db`, `identity_db`) và chạy script SQL này.

## Bước 3: Khởi động Frontend (Flutter)
Mở một terminal mới tại thư mục `frontend/` và chạy:
```bash
cd frontend
flutter pub get
flutter run -d chrome
```
*Lưu ý: API Gateway ở backend mặc định chạy ở `http://localhost:8080`, mã nguồn Frontend (`lib/core/app_settings.dart`) đã được cấu hình sẵn để kết nối tới địa chỉ này.*

## Kiểm tra trạng thái hệ thống
Để đảm bảo tất cả container đang chạy ổn định, dùng lệnh:
```bash
docker ps
```
Nếu có bất kỳ service nào báo `restarting` (ví dụ do đợi RabbitMQ khởi động chưa xong), bạn có thể ép khởi động lại nó:
```bash
docker-compose restart <tên_service>
# Ví dụ: docker-compose restart order_api
```
