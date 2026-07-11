# 🏨 Microservices Hotel Booking
Dự án nền tảng đặt phòng khách sạn phân tán (Distributed Hotel Booking Platform).

## 🌟 Tóm tắt dự án
Dự án này áp dụng kiến trúc **Microservices** nhằm giải quyết bài toán: Chịu tải cao khi có hàng ngàn người tìm phòng cùng lúc, và đảm bảo tuyệt đối không bị "Double Booking" (nhiều người đặt cùng 1 phòng). 

Hệ thống được chia làm **13 Services** chia thành 4 khối chức năng chính để team 4 người có thể phát triển song song độc lập.

## 📚 Tài liệu Hướng dẫn (Docs)
Hãy đọc theo thứ tự dưới đây để hiểu toàn bộ linh hồn của dự án:
1. [01. System Overview](./docs/01-system-overview.md) - Đọc file này đầu tiên để hiểu toàn cục!
2. [02. Architecture & Flow](./docs/02-architecture.md) - Sơ đồ kiến trúc và luồng chạy.
3. [03. Service Boundary](./docs/03-service-boundary.md) - Ranh giới trách nhiệm của 13 services.
4. [04. Database & Event Guideline](./docs/04-database-event-guideline.md) - Toàn tập về Data và Message Queue.
5. [05. Setup Guide](./docs/05-setup-guide.md) - Hướng dẫn 1-Click cài đặt môi trường cho Developer mới.

## 🚀 Cấu trúc Source Code
- `backend/services/`: Mã nguồn 13 services độc lập.
- `docs/`: Tài liệu System Design chuẩn.
- `infrastructure/`: File `docker-compose.yml` (PostgreSQL, Redis, RabbitMQ).

| Service                  | Chức năng chính                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **identity-service**     | Quản lý đăng nhập, đăng ký, JWT, phân quyền (Role/Permission) và hồ sơ người dùng (Profile, địa chỉ, điểm thưởng).  |
| **hotel-service**        | Quản lý thông tin khách sạn, chủ khách sạn (Agent), loại phòng, phòng, tiện ích, hình ảnh và các thông tin tĩnh.    |
| **inventory-service**    | Quản lý tình trạng phòng theo ngày: còn trống, đã khóa, bảo trì, giá theo mùa và kiểm tra khả năng đặt phòng.       |
| **search-service**       | Đồng bộ dữ liệu từ Hotel và Inventory để tìm kiếm, lọc và sắp xếp khách sạn nhanh chóng (ElasticSearch hoặc Cache). |
| **booking-service**      | Quản lý toàn bộ vòng đời đặt phòng: tạo đơn, xác nhận, hủy, check-in, check-out và trạng thái booking.              |
| **payment-service**      | Xử lý thanh toán, hoàn tiền, hóa đơn và tích hợp các cổng thanh toán như VNPay, Stripe, PayPal.                     |
| **promotion-service**    | Quản lý voucher, coupon, chương trình khuyến mãi và tính toán giảm giá cho đơn đặt phòng.                           |
| **notification-service** | Gửi Email, SMS, OTP, Push Notification và các thông báo trong ứng dụng khi có sự kiện xảy ra.                       |
| **review-service**       | Quản lý đánh giá, chấm điểm, bình luận và phản hồi của khách sau khi hoàn thành đặt phòng.                          |
| **analytics-service**    | Tổng hợp dữ liệu, thống kê doanh thu, lượng đặt phòng, tỷ lệ lấp đầy và cung cấp Dashboard cho Admin.               |

Flutter App
      │
      ▼
 API Gateway
      │
      ├──────────────► identity-service
      │
      ├──────────────► search-service
      │                     │
      │                     ├──► hotel-service
      │                     └──► inventory-service
      │
      ├──────────────► booking-service
      │                     │
      │                     ├──► inventory-service
      │                     ├──► promotion-service
      │                     └──► payment-service
      │
      ├──────────────► review-service
      │
      └──────────────► analytics-service

Các service Publish Event
                │
                ▼
      notification-service



     ví dụ fouder có trong  booking-service/ (Clean Architecture (Kiến trúc sạch))
├── src/                       # Thư mục mã nguồn chính (Hoặc "internal/" nếu dùng Go)
│   ├── Domain/                # Lớp 1: Chứa thực thể nghiệp vụ cốt lõi (Không phụ thuộc vào bất kỳ thư viện nào)
│   │   ├── Entities/          # class Booking, BookingRoom...
│   │   ├── Enums/             # BookingStatus, GuestType...
│   │   └── Exceptions/        # Custom domain errors (vd: BookingNotFoundException)
│   │
│   ├── Application/           # Lớp 2: Chứa nghiệp vụ Logic (Use Cases) của hệ thống
│   │   ├── Interfaces/        # Định nghĩa các cổng giao tiếp (Interfaces) như IBookingRepository, IMessageQueue
│   │   ├── UseCases/          # Logic xử lý cụ thể (vd: CreateBookingUseCase, CancelBookingUseCase)
│   │   ├── DTOs/              # Request/Response data (vd: BookingRequestDto, BookingResponseDto)
│   │   └── Validators/        # Kiểm tra tính hợp lệ dữ liệu đầu vào
│   │
│   ├── Infrastructure/        # Lớp 3: Chứa các cài đặt công nghệ thực tế (Database, Queue, Mail...)
│   │   ├── Persistence/       # DB Context, Cài đặt Repositories cụ thể (EF Core, MongoDB Driver, Mongoose)
│   │   ├── Messaging/         # Cài đặt code kết nối RabbitMQ (Publish/Subscribe)
│   │   └── ExternalServices/  # Gọi sang cổng Payment (Stripe/VNPay) hoặc Notification
│   │
│   └── Presentation/          # Lớp 4: Cổng vào của Request (API / WebSockets / gRPC)
│       ├── Controllers/       # Nhận HTTP Request từ API Gateway và gọi xuống Lớp Application
│       ├── Middlewares/       # Bắt lỗi tập trung (Global Error Handling), Log request
│       └── Filters/           # Validate JWT Token
│
├── tests/                     # Thư mục chứa Unit Test & Integration Test
│   ├── UnitTests/             # Test logic trong Application/Domain (Mock DB)
│   └── IntegrationTests/      # Test gọi API thực tế chạm vào DB test
│
├── Dockerfile                 # Đóng gói service thành Container
├── .env.example               # File cấu hình mẫu dùng chạy local
└── Program.cs                 # Điểm chạy khởi nguồn (Hoặc main.go, server.js tùy ngôn ngữ)