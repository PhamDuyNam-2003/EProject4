# inventory-service

**Mục đích:** Quản lý tình trạng phòng theo ngày: còn trống, đã khóa, bảo trì, giá theo mùa và kiểm tra khả năng đặt phòng.
**Dependencies:** Calls: `None` | Gọi bởi: `booking-service, search-service`

---

## 1. Database Schema
- **Database:** `inventory_db`
- **Seed Data:** None

```csharp
public class RoomAvailability {
    public Guid Id { get; set; } // PK, Required, ID Availability
    public Guid RoomTypeId { get; set; } // Required, Hạng phòng
    public DateTime Date { get; set; } // Required, Ngày cụ thể
    public int AvailableCount { get; set; } // Required, Phòng trống
    public int LockedCount { get; set; } // Required, Phòng đang bị khóa
    public decimal PriceModifier { get; set; } // Required, Hệ số giá thay đổi
}

public class RoomLock {
    public Guid Id { get; set; } // PK, Required, ID Lock
    public Guid BookingId { get; set; } // Required, Booking liên quan
    public int Quantity { get; set; } // Required, Số phòng lock
    public DateTime LockUntil { get; set; } // Required, Hạn giữ phòng
}

```


## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| POST | /api/v1/inventory/lock | Lock phòng | Yes | LockReq | LockRes | 200 |


## 3. Message Queue
- **Publish:** InventoryChanged
- **Subscribe:** BookingCreated, BookingCancelled, RoomTypeCreated

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `inventory_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
