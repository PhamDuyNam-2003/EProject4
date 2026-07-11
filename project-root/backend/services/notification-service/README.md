# notification-service

**Mục đích:** Gửi Email, SMS, OTP, Push Notification và các thông báo trong ứng dụng khi có sự kiện xảy ra.
**Dependencies:** Calls: `None` | Gọi bởi: `identity-service, booking-service`

---

## 1. Database Schema
- **Database:** `notification_db`
- **Seed Data:** Templates

```csharp
public class Notification
{
    public Guid Id { get; set; }                   // PK, Required
    public Guid UserId { get; set; }               // FK, Required -> User (1:N User)
    public NotificationType Type { get; set; }     // Enum, Required - Email, Push, SMS, InApp
    public string Title { get; set; }              // Required - Tiêu đề
    public string Content { get; set; }            // Required - Nội dung
    public NotificationStatus Status { get; set; } // Enum, Required
    public DateTime CreatedAt { get; set; }         // Required
    public DateTime? SentAt { get; set; }          // Optional
}

public class NotificationTemplate
{
    public Guid Id { get; set; }                    // PK, Required
    public string Code { get; set; }                // Required, UQ - BOOKING_SUCCESS
    public string Subject { get; set; }             // Required - Subject Email
    public string Body { get; set; }                // Required - HTML Template
    public NotificationType Type { get; set; }      // Enum, Required - Email / SMS / Push
}

public class DeviceToken
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid UserId { get; set; }                // FK, Required -> User (1:N User)
    public string Token { get; set; }               // Required - Firebase Token
    public string DeviceName { get; set; }          // Optional - Android, IOS
    public DateTime CreatedAt { get; set; }         // Required
}

public enum NotificationType
{
    Email,
    Push,
    SMS,
    InApp
}

public enum NotificationStatus
{
    Pending,
    Sending,
    Success,
    Failed
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| GET | /api/v1/notifications | Lấy thông báo | Yes | - | List<Noti> | 200 |


## 3. Message Queue
- **Publish:** NotificationSent
- **Subscribe:** BookingCreated, PaymentCompleted, AccountCreated

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `notification_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
