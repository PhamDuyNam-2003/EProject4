# payment-service

**Mục đích:** Xử lý thanh toán, hoàn tiền, hóa đơn và tích hợp các cổng thanh toán như VNPay, Stripe, PayPal.
**Dependencies:** Calls: `None` | Gọi bởi: `booking-service`

---

## 1. Database Schema
- **Database:** `payment_db`
- **Seed Data:** PaymentMethod

```csharp
public class Payment
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid BookingId { get; set; }               // FK, Required -> Booking (1:1 Booking)
    public decimal Amount { get; set; }               // Required - Số tiền
    public PaymentMethod Method { get; set; }         // Enum, Required - VNPay, Stripe...
    public PaymentStatus Status { get; set; }         // Enum, Required - Trạng thái
    public string TransactionCode { get; set; }       // Required - Mã giao dịch
    public DateTime PaidAt { get; set; }              // Required - Thời gian thanh toán
}

public class PaymentTransaction
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid PaymentId { get; set; }               // FK, Required -> Payment (1:N Payment)
    public string Gateway { get; set; }               // Required - VNPay, Stripe
    public string GatewayTransactionId { get; set; }  // Required - Mã giao dịch từ Gateway
    public string RawResponse { get; set; }           // Optional - Response gốc
    public bool IsSuccess { get; set; }               // Required - Thành công hay không
    public DateTime CreatedAt { get; set; }           // Required - Thời gian giao dịch
}

public class Refund
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid PaymentId { get; set; }               // FK, Required -> Payment (1:N Payment)
    public decimal Amount { get; set; }               // Required - Tiền hoàn
    public string Reason { get; set; }                // Required - Lý do hoàn
    public RefundStatus Status { get; set; }          // Enum, Required - Trạng thái hoàn tiền
    public DateTime RefundedAt { get; set; }          // Required - Thời điểm hoàn
}

public class Invoice
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid PaymentId { get; set; }               // FK, Required -> Payment (1:1 Payment)
    public string InvoiceNumber { get; set; }         // Required - Số hóa đơn
    public decimal TotalAmount { get; set; }          // Required - Tổng tiền
    public DateTime IssuedAt { get; set; }            // Required - Ngày xuất hóa đơn
}

public enum PaymentMethod
{
    Cash,
    VNPay,
    Stripe,
    PayPal
}

public enum PaymentStatus
{
    Pending,
    Paid,
    Failed,
    Refunded
}

public enum RefundStatus
{
    Pending,
    Approved,
    Rejected,
    Completed
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| POST | /api/v1/payments/webhook | Webhook VNPay | No | Webhook | Ok | 200 |


## 3. Message Queue
- **Publish:** PaymentCompleted, PaymentFailed
- **Subscribe:** BookingCreated

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `payment_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
