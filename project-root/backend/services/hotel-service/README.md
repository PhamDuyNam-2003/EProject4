# hotel-service

**Mục đích:** Quản lý thông tin khách sạn, chủ khách sạn (Agent), loại phòng, phòng, tiện ích, hình ảnh và các thông tin tĩnh.
**Dependencies:** Calls: `None` | Gọi bởi: `search-service, booking-service, review-service`

---

## 1. Database Schema
- **Database:** `hotel_db`
- **Seed Data:** Amenity

```csharp
public class Hotel
{
    public Guid Id { get; set; }                    // PK, Required - Mã khách sạn
    public Guid OwnerId { get; set; }               // FK, Required -> User (1:N User, Chủ khách sạn)
    public string Name { get; set; }                // Required - Tên khách sạn
    public string Description { get; set; }         // Optional - Mô tả
    public int StarRating { get; set; }             // Required - 1-5 sao
    public string PhoneNumber { get; set; }         // Required - Hotline
    public string Email { get; set; }               // Required - Email liên hệ
    public string Address { get; set; }             // Required - Địa chỉ
    public string Ward { get; set; }                // Required - Phường/Xã
    public string District { get; set; }            // Required - Quận/Huyện
    public string Province { get; set; }            // Required - Tỉnh/Thành phố
    public string Country { get; set; }             // Required - Quốc gia
    public double Latitude { get; set; }            // Required - Vĩ độ
    public double Longitude { get; set; }           // Required - Kinh độ
    public HotelStatus Status { get; set; }         // Enum, Required
    public TimeOnly CheckInTime { get; set; }       // Required - Giờ nhận phòng
    public TimeOnly CheckOutTime { get; set; }      // Required - Giờ trả phòng
    public DateTime CreatedAt { get; set; }         // Required
    public DateTime UpdatedAt { get; set; }         // Required
}

public class HotelAmenity
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid HotelId { get; set; }               // FK, Required -> Hotel (1:N Hotel)
    public string Name { get; set; }                // Required - Wifi, Pool...
    public string Icon { get; set; }                // Optional - Icon hiển thị
    public string Description { get; set; }         // Optional - Mô tả
}

public class HotelPolicy
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid HotelId { get; set; }               // FK, Required -> Hotel (1:N Hotel)
    public PolicyType Type { get; set; }            // Enum, Required
    public string Content { get; set; }             // Required - Nội dung chính sách
    public bool IsActive { get; set; }              // Required
}

public class HotelImage
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid HotelId { get; set; }               // FK, Required -> Hotel (1:N Hotel)
    public string ImageUrl { get; set; }            // Required - Link ảnh
    public bool IsThumbnail { get; set; }           // Required - Ảnh đại diện
    public int DisplayOrder { get; set; }           // Required - Thứ tự hiển thị
}

public class RoomType
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid HotelId { get; set; }               // FK, Required -> Hotel (1:N Hotel)
    public string Name { get; set; }                // Required - Deluxe, Standard...
    public string Description { get; set; }         // Optional - Mô tả
    public decimal BasePrice { get; set; }          // Required - Giá cơ bản
    public int Capacity { get; set; }               // Required - Sức chứa tối đa
    public decimal Area { get; set; }               // Required - Diện tích m²
    public Guid BedTypeId { get; set; }             // FK, Required -> BedType (1:N BedType)
    public RoomView View { get; set; }              // Enum, Required - Hướng phòng
    public bool HasBreakfast { get; set; }          // Required - Bao gồm ăn sáng
    public bool Refundable { get; set; }            // Required - Có hoàn tiền
    public bool SmokingAllowed { get; set; }        // Required - Cho hút thuốc
}

public class Room
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid RoomTypeId { get; set; }            // FK, Required -> RoomType (1:N RoomType)
    public string RoomNumber { get; set; }          // Required - Số phòng vật lý
    public int Floor { get; set; }                  // Required - Tầng
    public RoomStatus Status { get; set; }          // Enum, Required
    public bool IsActive { get; set; }              // Required - Đang khai thác
}

public class RoomAmenity
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid RoomTypeId { get; set; }            // FK, Required -> RoomType (1:N RoomType)
    public string Name { get; set; }                // Required - TV, Minibar...
    public string Icon { get; set; }                // Optional
    public string Description { get; set; }         // Optional
}

public class RoomImage
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid RoomTypeId { get; set; }            // FK, Required -> RoomType (1:N RoomType)
    public string ImageUrl { get; set; }            // Required - Link ảnh
    public bool IsThumbnail { get; set; }           // Required
    public int DisplayOrder { get; set; }           // Required
}

public class BedType
{
    public Guid Id { get; set; }                    // PK, Required
    public string Name { get; set; }                // Required - Single, Double, King...
    public string Description { get; set; }         // Optional - Mô tả
}

public class FavoriteHotel
{
    public Guid Id { get; set; }                    // PK, Required
    public Guid UserId { get; set; }                // FK, Required -> User (1:N User)
    public Guid HotelId { get; set; }               // FK, Required -> Hotel (1:N Hotel)
    public DateTime CreatedAt { get; set; }         // Required - Ngày thêm vào ưa thích
}

public enum HotelStatus
{
    Pending,        // Chờ duyệt
    Approved,       // Đã duyệt
    Suspended,      // Tạm khóa
    Closed          // Ngừng kinh doanh
}

public enum RoomStatus
{
    Active,
    Maintenance,
    Hidden
}

public enum RoomView
{
    City,
    Sea,
    Garden,
    Pool,
    Mountain
}

public enum PolicyType
{
    CheckIn,
    CheckOut,
    Smoking,
    Pet,
    Cancellation,
    Child,
    Payment
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| POST | /api/v1/hotels | Tạo khách sạn | Yes | CreateHotelDto | HotelDto | 201 |


## 3. Message Queue
- **Publish:** HotelCreated, RoomTypeCreated
- **Subscribe:** AccountCreated

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `hotel_db` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
