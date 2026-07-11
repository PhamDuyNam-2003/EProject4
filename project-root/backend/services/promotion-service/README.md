# promotion-service

**Mục đích:** Quản lý voucher, coupon, chương trình khuyến mãi và tính toán giảm giá cho đơn đặt phòng.
**Dependencies:** Calls: `None` | Gọi bởi: `booking-service`

---

## 1. Database Schema
- **Database:** `promotion_db`
- **Seed Data:** DiscountType

```csharp
public class Promotion
{
    public Guid Id { get; set; }                    // PK, Required - Mã chương trình
    public string Name { get; set; }                // Required - Tên chương trình
    public string Description { get; set; }         // Optional - Mô tả
    public DiscountType DiscountType { get; set; }  // Enum, Required - Theo % hoặc số tiền
    public decimal DiscountValue { get; set; }      // Required - Giá trị giảm
    public decimal MaxDiscount { get; set; }        // Required - Giảm tối đa
    public decimal MinBookingAmount { get; set; }   // Required - Booking tối thiểu
    public DateTime StartDate { get; set; }         // Required - Bắt đầu
    public DateTime EndDate { get; set; }           // Required - Kết thúc
    public PromotionStatus Status { get; set; }     // Enum, Required
    public DateTime CreatedAt { get; set; }         // Required
}

public class Coupon
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid PromotionId { get; set; }           // FK, Required -> Promotion (1:N Promotion)
    public string Code { get; set; }                // UQ, Required - Mã giảm giá
    public int UsageLimit { get; set; }             // Required - Tổng lượt dùng
    public int UsedCount { get; set; }              // Required - Đã dùng
    public bool IsActive { get; set; }              // Required - Còn hiệu lực
}

public class UserCoupon
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid CouponId { get; set; }              // FK, Required -> Coupon (1:N Coupon)
    public Guid UserId { get; set; }                // FK, Required -> User (1:N User)
    public bool IsUsed { get; set; }                // Required - Đã sử dụng
    public DateTime? UsedAt { get; set; }           // Optional - Ngày sử dụng
}

public enum DiscountType
{
    Percentage,
    FixedAmount
}

public enum PromotionStatus
{
    Draft,
    Active,
    Expired,
    Disabled
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| POST | /api/v1/promotions/apply | Tính giảm giá | Yes | Code | Discount | 200 |


## 3. Message Queue
- **Publish:** PromoApplied
- **Subscribe:** BookingCompleted

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `promotion_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
