using System.ComponentModel.DataAnnotations;

namespace Inventory_service.Domain.Entities
{
    public class RoomLock
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required]
        public Guid RoomTypeId { get; set; }
        
        [Required]
        public Guid UserId { get; set; }

        [Required]
        public DateTime CheckInTime { get; set; }
        
        [Required]
        public DateTime CheckOutTime { get; set; }

        [Required]
        public int QuantityLocked { get; set; }

        // 0: Pending, 1: Confirmed, 2: Released
        [Required]
        public int Status { get; set; } 

        public DateTime ExpiryTime { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
