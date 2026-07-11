# search-service

**Mục đích:** Đồng bộ dữ liệu từ Hotel và Inventory để tìm kiếm, lọc và sắp xếp khách sạn nhanh chóng (ElasticSearch).
**Dependencies:** Calls: `None` | Gọi bởi: `API Gateway`

---

## 1. Database Schema
- **Database:** `elasticsearch`
- **Seed Data:** None

```csharp
public class SearchIndex
{
    public Guid HotelId { get; set; }                  // PK, Required - ID khách sạn
    public string HotelName { get; set; }             // Required - Tên khách sạn
    public string City { get; set; }                  // Required - Thành phố
    public string Address { get; set; }               // Required - Địa chỉ
    public double Latitude { get; set; }              // Required - Vĩ độ
    public double Longitude { get; set; }             // Required - Kinh độ
    public decimal MinPrice { get; set; }             // Required - Giá thấp nhất
    public decimal MaxPrice { get; set; }             // Required - Giá cao nhất
    public double Rating { get; set; }                // Required - Điểm đánh giá trung bình
    public int ReviewCount { get; set; }              // Required - Tổng số đánh giá
    public string[] Amenities { get; set; }           // Required - Wifi, Pool, Gym...
    public string ThumbnailUrl { get; set; }          // Optional - Ảnh đại diện
    public DateTime UpdatedAt { get; set; }           // Required - Thời điểm đồng bộ
}

public class SearchHistory
{
    public Guid Id { get; set; }                      // PK, Required
    public Guid UserId { get; set; }                  // FK, Required -> User (1:N User)
    public string Keyword { get; set; }               // Optional - Từ khóa tìm kiếm
    public string City { get; set; }                  // Optional - Thành phố
    public DateOnly CheckInDate { get; set; }         // Required - Ngày nhận phòng
    public DateOnly CheckOutDate { get; set; }        // Required - Ngày trả phòng
    public int GuestCount { get; set; }               // Required - Số khách
    public DateTime CreatedAt { get; set; }           // Required - Thời gian tìm kiếm
}

public class PopularKeyword
{
    public Guid Id { get; set; }                      // PK, Required
    public string Keyword { get; set; }               // Required - Từ khóa
    public int SearchCount { get; set; }              // Required - Số lượt tìm
    public DateTime UpdatedAt { get; set; }           // Required - Cập nhật cuối
}

public enum SearchSortType
{
    Relevance,
    PriceLowToHigh,
    PriceHighToLow,
    Rating,
    Distance
}

public enum SearchFilterType
{
    Price,
    Star,
    Amenity,
    Rating
}
```



## 2. API Endpoints
| Method | Endpoint | Description | Auth | Request | Response | Status |
|---|---|---|---|---|---|---|
| GET | /api/v1/search | Tìm khách sạn | No | Query | List<SearchDto> | 200 |


## 3. Message Queue
- **Publish:** None
- **Subscribe:** HotelCreated, InventoryChanged

## 4. Checklist Triển Khai
- [ ] Tạo CSDL `elasticsearch` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
