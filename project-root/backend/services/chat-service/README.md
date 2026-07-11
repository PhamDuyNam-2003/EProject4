# chat-service

**Mục đích:** Xử lý kết nối WebSocket và lưu trữ lịch sử tin nhắn trò chuyện trực tiếp giữa Khách hàng và Khách sạn.
**Dependencies:** Calls: `None` | Gọi bởi: `API Gateway`

---

## 1. Database Schema
- **Database:** `chat_db` (Thường sử dụng MongoDB để lưu trữ hội thoại phi cấu trúc và tốc độ ghi cao)
- **Seed Data:** None

```csharp
public class Conversation
{
    public Guid Id { get; set; }                    // PK, Required - Mã cuộc trò chuyện
    public Guid CustomerId { get; set; }            // FK, Required -> User (1:N User, Khách hàng)
    public Guid HotelId { get; set; }               // FK, Required -> Hotel (1:N Hotel, Khách sạn)
    public Guid? BookingId { get; set; }            // FK, Optional -> Booking (1:1 Booking, Có thể null)
    public ConversationStatus Status { get; set; }  // Enum, Required
    public DateTime CreatedAt { get; set; }         // Required - Ngày tạo
    public DateTime UpdatedAt { get; set; }         // Required - Tin nhắn cuối cùng
}

public class Message
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid ConversationId { get; set; }        // FK, Required -> Conversation (1:N Conversation)
    public Guid SenderId { get; set; }              // FK, Required -> User (1:N User)
    public Guid ReceiverId { get; set; }            // FK, Required -> User (1:N User)
    public MessageType Type { get; set; }           // Enum, Required
    public string Content { get; set; }             // Required - Nội dung tin nhắn
    public MessageStatus Status { get; set; }       // Enum, Required
    public DateTime SentAt { get; set; }            // Required - Thời điểm gửi
    public DateTime? ReadAt { get; set; }           // Optional - Thời điểm đã đọc
}

public class MessageAttachment
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid MessageId { get; set; }             // FK, Required -> Message (1:N Message)
    public AttachmentType Type { get; set; }        // Enum, Required
    public string FileName { get; set; }            // Required - Tên file
    public string FileUrl { get; set; }             // Required - Đường dẫn file
    public long FileSize { get; set; }              // Required - Kích thước file (byte)
}

public class Participant
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid ConversationId { get; set; }        // FK, Required -> Conversation (1:N Conversation)
    public Guid UserId { get; set; }                // FK, Required -> User (1:N User)
    public ParticipantRole Role { get; set; }       // Enum, Required
    public DateTime JoinedAt { get; set; }          // Required - Thời gian tham gia
}

public class Connection
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid UserId { get; set; }                // FK, Required -> User (1:N User)
    public string ConnectionId { get; set; }        // Required, UQ - SignalR/WebSocket Connection ID
    public bool IsOnline { get; set; }              // Required - Trạng thái online
    public DateTime ConnectedAt { get; set; }       // Required - Thời điểm kết nối
    public DateTime? DisconnectedAt { get; set; }   // Optional - Thời điểm ngắt kết nối
}

public enum ConversationStatus
{
    Open,           // Đang hoạt động
    Closed,         // Đã đóng
    Archived        // Lưu trữ
}

public enum MessageType
{
    Text,
    Image,
    File,
    Booking,
    System
}

public enum MessageStatus
{
    Sending,
    Sent,
    Delivered,
    Read,
    Failed
}

public enum AttachmentType
{
    Image,
    Video,
    File,
    Audio
}

public enum ParticipantRole
{
    Customer,
    HotelStaff,
    Admin
}
```

## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| GET | /api/v1/chats/conversations | Lấy ds cuộc trò chuyện | Yes | - | List<Conversation> | 200 |
| GET | /api/v1/chats/conversations/{id}/messages | Lấy lịch sử tin nhắn | Yes | - | List<Message> | 200 |

## 3. Message Queue
- **Publish:** MessageSent
- **Subscribe:** None

## 4. Checklist Triển Khai
- [ ] Cài đặt WebSocket/SignalR Server
- [ ] Thiết lập Database `chat_db` (MongoDB)
- [ ] Viết Models & DTOs
- [ ] Thiết kế logic xác thực kết nối WebSocket
- [ ] Viết API lấy lịch sử tin nhắn & cuộc trò chuyện
- [ ] Tích hợp Message Queue (Publish Event khi có tin nhắn mới)
- [ ] Viết Unit Test & Build Dockerfile
