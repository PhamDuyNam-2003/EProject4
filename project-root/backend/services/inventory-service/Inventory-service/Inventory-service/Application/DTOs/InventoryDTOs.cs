namespace Inventory_service.Application.DTOs
{
    public class CheckAvailabilityRequest
    {
        public Guid RoomTypeId { get; set; }
        public DateTime CheckInTime { get; set; }
        public DateTime CheckOutTime { get; set; }
        public int Quantity { get; set; }
    }

    public class LockRoomRequest
    {
        public Guid RoomTypeId { get; set; }
        public Guid UserId { get; set; }
        public DateTime CheckInTime { get; set; }
        public DateTime CheckOutTime { get; set; }
        public int Quantity { get; set; }
    }

    public class InventoryResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; } = string.Empty;
        public Guid? LockId { get; set; }
    }
}
