# 📱 Flutter Mobile Application (Frontend)

Đây là nơi chứa toàn bộ mã nguồn ứng dụng di động được phát triển bằng **Flutter** (hỗ trợ cả Android và iOS).

## 🚀 Cấu trúc thư mục đề xuất (Clean Architecture)

Khi chạy lệnh khởi tạo Flutter (`flutter create mobile_app`), bạn hãy cấu trúc thư mục `lib/` theo dạng **Feature-First** để dễ dàng phân chia công việc cho các thành viên trong nhóm:

```text
lib/
├── core/                  # Các cấu hình dùng chung toàn hệ thống
│   ├── network/           # HTTP Client (Dio/Http), WebSocket Client cho Chat
│   ├── constants/         # API Endpoint, màu sắc, font chữ
│   ├── theme/             # Light/Dark mode
│   └── utils/             # Helper class (định dạng tiền tệ, ngày tháng)
│
├── features/              # Chia theo các nhóm nghiệp vụ chính
│   ├── auth/              # Đăng ký, đăng nhập, quên mật khẩu
│   ├── hotel_search/      # Tìm kiếm, lọc khách sạn, bản đồ
│   ├── booking/           # Đặt phòng, quản lý vé, lịch sử đặt
│   ├── chat/              # Chat realtime qua WebSocket
│   └── profile/           # Thông tin cá nhân, tích lũy điểm
│
└── main.dart              # Điểm khởi chạy ứng dụng
```

## 🛠️ Các thư viện Flutter khuyên dùng cho dự án này

1.  **State Management (Quản lý trạng thái):** `flutter_bloc` (Khuyên dùng cho microservices/dự án lớn để phân tách UI và Logic) hoặc `provider` (dễ học hơn).
2.  **API Client (Kết nối Gateway):** `dio` (Tốt hơn http mặc định vì hỗ trợ Interceptors để tự động đính kèm JWT Token vào header khi gọi API).
3.  **Realtime Chat:** `web_socket_channel` hoặc `signalr_netcore` (nếu backend dùng C# SignalR) để kết nối trực tiếp đến `chat-service`.
4.  **Bản đồ (Latitude/Longitude):** `google_maps_flutter` hoặc `flutter_map` để hiển thị vị trí khách sạn.
5.  **Local Storage (Lưu Token):** `flutter_secure_storage` để lưu trữ JWT Token an toàn trong Keychain (iOS) và Keystore (Android).
