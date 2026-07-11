# review-service

**Mục đích:** Quản lý đánh giá, chấm điểm, bình luận và phản hồi của khách sau khi hoàn thành đặt phòng.
**Dependencies:** Calls: `None` | Gọi bởi: `None`

---

## 1. Database Schema
- **Database:** `review_db`
- **Seed Data:** None

```csharp
public class Review
{
    public Guid Id { get; set; }                   // PK, Required
    public Guid BookingId { get; set; }            // FK, Required -> Booking (1:1 Booking)
    public Guid HotelId { get; set; }              // FK, Required -> Hotel (1:N Hotel)
    public Guid UserId { get; set; }               // FK, Required -> User (1:N User)
    public int Rating { get; set; }                // Required - 1-5 sao
    public string Title { get; set; }              // Optional - Tiêu đề
    public string Comment { get; set; }            // Required - Nội dung
    public ReviewStatus Status { get; set; }       // Enum, Required
    public DateTime CreatedAt { get; set; }         // Required
}

public class ReviewImage
{
    public Guid Id { get; set; }                   // PK, Required
    public Guid ReviewId { get; set; }             // FK, Required -> Review (1:N Review)
    public string ImageUrl { get; set; }           // Required - Link ảnh
}

public class ReviewReply
{
    public Guid Id { get; set; }                   // PK, Required
    public Guid ReviewId { get; set; }             // FK, Required -> Review (1:1 Review)
    public Guid StaffId { get; set; }              // FK, Required -> User (1:N User, Staff)
    public string Content { get; set; }            // Required - Nội dung phản hồi
    public DateTime CreatedAt { get; set; }         // Required
}

public enum ReviewStatus
{
    Pending,
    Published,
    Hidden
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| POST | /api/v1/reviews | Đăng review | Yes | ReviewReq | ReviewRes | 201 |


## 3. Message Queue
- **Publish:** ReviewCreated
- **Subscribe:** BookingCompleted

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `review_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
