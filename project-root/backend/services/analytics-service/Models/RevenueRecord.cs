using System;
using System.ComponentModel.DataAnnotations;

namespace AnalyticsService.Models
{
    public class RevenueRecord
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string HotelId { get; set; } = string.Empty;

        [Required]
        public string OrderId { get; set; } = string.Empty;

        [Required]
        public decimal Amount { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
