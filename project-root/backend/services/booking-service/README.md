# booking-service

**Mục đích:** Quản lý toàn bộ vòng đời đặt phòng: tạo đơn, xác nhận, hủy, check-in, check-out và trạng thái booking.
**Dependencies:** Calls: `inventory-service, payment-service, promotion-service` | Gọi bởi: `API Gateway`

---

## 1. Database Schema
- **Database:** `booking_db`
- **Seed Data:** BookingStatus

```csharp
public class Booking
{
    public Guid Id { get; set; }                      // PK, Required
    public string BookingCode { get; set; }           // UQ, Required - Mã đặt phòng
    public Guid UserId { get; set; }                  // FK, Required -> User (1:N User)
    public Guid HotelId { get; set; }                 // FK, Required -> Hotel (1:N Hotel)
    public DateOnly CheckInDate { get; set; }         // Required - Ngày nhận phòng
    public DateOnly CheckOutDate { get; set; }        // Required - Ngày trả phòng
    public int AdultCount { get; set; }               // Required - Số người lớn
    public int ChildCount { get; set; }               // Required - Số trẻ em
    public decimal TotalAmount { get; set; }          // Required - Tổng tiền
    public decimal DiscountAmount { get; set; }       // Required - Giảm giá
    public decimal FinalAmount { get; set; }          // Required - Thành tiền
    public BookingStatus Status { get; set; }         // Enum, Required - Trạng thái
    public string SpecialRequest { get; set; }        // Optional - Yêu cầu đặc biệt
    public DateTime CreatedAt { get; set; }           // Required - Ngày tạo
}

public class BookingRoom
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid BookingId { get; set; }               // FK, Required -> Booking (1:N Booking)
    public Guid RoomId { get; set; }                  // FK, Required -> Room (1:N Room)
    public decimal PricePerNight { get; set; }        // Required - Giá mỗi đêm
    public int NightCount { get; set; }               // Required - Số đêm
    public decimal TotalPrice { get; set; }           // Required - Thành tiền
}

public class Guest
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid BookingId { get; set; }               // FK, Required -> Booking (1:N Booking)
    public string FullName { get; set; }              // Required - Họ tên khách
    public string IdentityCard { get; set; }          // Required - CCCD / Passport
    public DateOnly DateOfBirth { get; set; }         // Required - Ngày sinh
    public string Nationality { get; set; }           // Required - Quốc tịch
    public GuestType GuestType { get; set; }          // Enum, Required - Người lớn / Trẻ em
}

public class BookingHistory
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid BookingId { get; set; }               // FK, Required -> Booking (1:N Booking)
    public BookingStatus OldStatus { get; set; }      // Enum, Required - Trạng thái cũ
    public BookingStatus NewStatus { get; set; }      // Enum, Required - Trạng thái mới
    public string Note { get; set; }                  // Optional - Ghi chú
    public DateTime ChangedAt { get; set; }           // Required - Thời điểm thay đổi
}

public class Cancellation
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid BookingId { get; set; }               // FK, Required -> Booking (1:1 Booking)
    public string Reason { get; set; }                // Required - Lý do hủy
    public decimal RefundAmount { get; set; }         // Required - Tiền hoàn
    public DateTime CancelledAt { get; set; }         // Required - Ngày hủy
}

public enum BookingStatus
{
    Pending,
    Confirmed,
    Cancelled,
    CheckedIn,
    CheckedOut,
    Completed
}

public enum GuestType
{
    Adult,
    Child
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| POST | /api/v1/bookings | Đặt phòng | Yes | BookingReq | BookingRes | 201 |


## 3. Message Queue
- **Publish:** BookingCreated, BookingCancelled
- **Subscribe:** PaymentCompleted

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `booking_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
