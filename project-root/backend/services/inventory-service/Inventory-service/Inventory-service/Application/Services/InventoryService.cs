using Inventory_service.Application.DTOs;
using Inventory_service.Application.Interfaces;
using Inventory_service.Domain.Entities;
using Inventory_service.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Inventory_service.Application.Services
{
    public class InventoryService : IInventoryService
    {
        private readonly InventoryDbContext _context;
        private readonly IRedisLockService _redisLockService;

        public InventoryService(InventoryDbContext context, IRedisLockService redisLockService)
        {
            _context = context;
            _redisLockService = redisLockService;
        }

        public async Task<bool> CheckAvailabilityAsync(CheckAvailabilityRequest request)
        {
            var inventory = await _context.RoomInventories
                .FirstOrDefaultAsync(r => r.RoomTypeId == request.RoomTypeId);
                
            if (inventory == null) return false;

            int totalRooms = inventory.TotalRooms;

            // Thuật toán Overlapping: Tính tổng các khóa phòng ĐANG CÓ HIỆU LỰC trùng với khung giờ khách muốn đặt
            // Công thức trùng nhau: L.CheckIn < R.CheckOut VÀ L.CheckOut > R.CheckIn
            int overlappingLocks = await _context.RoomLocks
                .Where(l => l.RoomTypeId == request.RoomTypeId &&
                            l.Status != 2 && // 2 = Đã hủy (Released)
                            l.CheckInTime < request.CheckOutTime &&
                            l.CheckOutTime > request.CheckInTime)
                .SumAsync(l => l.QuantityLocked);

            return (totalRooms - overlappingLocks) >= request.Quantity;
        }

        public async Task<InventoryResponse> LockRoomAsync(LockRoomRequest request)
        {
            // 1. Lên Redis xin cấp một cái Khóa ảo (Chống Race Condition)
            string redisKey = $"booking_lock_{request.RoomTypeId}";
            string redisValue = request.UserId.ToString();
            
            // Chỉ giữ khóa 5 giây để đề phòng chết server thì khóa tự nhả
            bool isAcquired = await _redisLockService.AcquireLockAsync(redisKey, redisValue, TimeSpan.FromSeconds(5));

            if (!isAcquired)
            {
                return new InventoryResponse 
                { 
                    IsSuccess = false, 
                    Message = "Hệ thống đang có quá nhiều người đặt loại phòng này. Vui lòng thử lại sau 1 giây!" 
                };
            }

            try
            {
                // 2. Lúc này ta đã ở TRONG VÒNG BẢO VỆ, tha hồ thong thả kiểm tra DB
                bool isAvailable = await CheckAvailabilityAsync(new CheckAvailabilityRequest
                {
                    RoomTypeId = request.RoomTypeId,
                    CheckInTime = request.CheckInTime,
                    CheckOutTime = request.CheckOutTime,
                    Quantity = request.Quantity
                });

                if (!isAvailable)
                {
                    return new InventoryResponse 
                    { 
                        IsSuccess = false, 
                        Message = "Rất tiếc, đã có người nhanh tay hơn. Khung giờ này đã hết phòng!" 
                    };
                }

                // 3. Nếu còn phòng, tạo RoomLock vào DB để giữ chỗ
                var roomLock = new RoomLock
                {
                    RoomTypeId = request.RoomTypeId,
                    UserId = request.UserId,
                    CheckInTime = request.CheckInTime,
                    CheckOutTime = request.CheckOutTime,
                    QuantityLocked = request.Quantity,
                    Status = 0, // 0 = Pending (Đang đợi thanh toán)
                    ExpiryTime = DateTime.UtcNow.AddMinutes(15) // Hạn thanh toán 15 phút
                };

                _context.RoomLocks.Add(roomLock);
                await _context.SaveChangesAsync();

                return new InventoryResponse 
                { 
                    IsSuccess = true, 
                    Message = "Giữ phòng thành công! Bạn có 15 phút để thanh toán.",
                    LockId = roomLock.Id
                };
            }
            finally
            {
                // 4. KIỂU GÌ CŨNG PHẢI NHẢ KHÓA REDIS CHO NGƯỜI KHÁC VÀO
                await _redisLockService.ReleaseLockAsync(redisKey, redisValue);
            }
        }
    }
}
