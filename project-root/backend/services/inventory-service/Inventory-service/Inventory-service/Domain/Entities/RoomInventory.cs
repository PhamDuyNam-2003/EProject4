using System.ComponentModel.DataAnnotations;

namespace Inventory_service.Domain.Entities
{
    public class RoomInventory
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required]
        public Guid RoomTypeId { get; set; }
        
        [Required]
        public Guid HotelId { get; set; }

        [Required]
        public int TotalRooms { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
