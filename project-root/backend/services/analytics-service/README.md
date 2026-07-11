# analytics-service

**Mục đích:** Tổng hợp dữ liệu, thống kê doanh thu, lượng đặt phòng, tỷ lệ lấp đầy và cung cấp Dashboard cho Admin.
**Dependencies:** Calls: `None` | Gọi bởi: `None`

---

## 1. Database Schema
- **Database:** `analytics_db`
- **Seed Data:** None

```csharp
public class RevenueReport
{
    public Guid Id { get; set; }                 // PK, Required
    public DateOnly ReportDate { get; set; }     // Required - Ngày thống kê
    public decimal TotalRevenue { get; set; }    // Required - Doanh thu
    public int BookingCount { get; set; }        // Required - Tổng Booking
    public int CancelledBooking { get; set; }    // Required - Booking hủy
    public DateTime GeneratedAt { get; set; }    // Required
}

public class HotelReport
{
    public Guid Id { get; set; }                 // PK, Required
    public Guid HotelId { get; set; }            // FK, Required -> Hotel (1:N Hotel)
    public int BookingCount { get; set; }        // Required - Tổng Booking
    public decimal Revenue { get; set; }         // Required - Doanh thu
    public double AverageRating { get; set; }    // Required - Rating trung bình
    public DateOnly ReportDate { get; set; }     // Required
}

public class UserReport
{
    public Guid Id { get; set; }                 // PK, Required
    public Guid UserId { get; set; }             // FK, Required -> User (1:N User)
    public int BookingCount { get; set; }        // Required - Tổng Booking
    public decimal TotalSpent { get; set; }      // Required - Tổng tiền
    public DateOnly ReportDate { get; set; }     // Required
}

public enum ReportType
{
    Daily,
    Weekly,
    Monthly,
    Yearly
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| GET | /api/v1/analytics/dashboard | Xem doanh thu | Yes | DateRange | DashboardDto | 200 |


## 3. Message Queue
- **Publish:** None
- **Subscribe:** PaymentCompleted, BookingCreated

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `analytics_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
