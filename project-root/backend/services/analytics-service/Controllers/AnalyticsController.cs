using System;
using System.Linq;
using System.Threading.Tasks;
using AnalyticsService.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AnalyticsService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnalyticsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AnalyticsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("revenue")]
        public async Task<IActionResult> GetTotalRevenue([FromQuery] string? hotelId)
        {
            var query = _context.RevenueRecords.AsQueryable();

            if (!string.IsNullOrEmpty(hotelId))
            {
                query = query.Where(r => r.HotelId == hotelId);
            }

            var totalRevenue = await query.SumAsync(r => r.Amount);
            var totalOrders = await query.CountAsync();

            return Ok(new
            {
                success = true,
                message = "Revenue fetched successfully",
                data = new
                {
                    totalRevenue,
                    totalOrders
                }
            });
        }

        [HttpGet("revenue/history")]
        public async Task<IActionResult> GetRevenueHistory([FromQuery] string? hotelId, [FromQuery] string period = "daily", [FromQuery] int count = 7)
        {
            var now = DateTime.UtcNow;
            DateTime fromDate;
            
            switch (period.ToLower())
            {
                case "weekly":
                    fromDate = now.AddDays(-7 * count);
                    break;
                case "monthly":
                    fromDate = now.AddMonths(-count);
                    break;
                case "yearly":
                    fromDate = now.AddYears(-count);
                    break;
                default:
                    fromDate = now.AddDays(-count);
                    break;
            }

            var query = _context.RevenueRecords.Where(r => r.CreatedAt >= fromDate);

            if (!string.IsNullOrEmpty(hotelId))
            {
                query = query.Where(r => r.HotelId == hotelId);
            }

            var records = await query.ToListAsync();
            
            var history = records
                .GroupBy(r => {
                    if (period.ToLower() == "monthly") return new DateTime(r.CreatedAt.Year, r.CreatedAt.Month, 1).ToString("yyyy-MM");
                    if (period.ToLower() == "yearly") return r.CreatedAt.Year.ToString();
                    return r.CreatedAt.Date.ToString("yyyy-MM-dd");
                })
                .Select(g => new
                {
                    Date = g.Key,
                    Revenue = g.Sum(x => x.Amount),
                    Orders = g.Count()
                })
                .OrderBy(x => x.Date)
                .ToList();

            return Ok(new
            {
                success = true,
                data = history
            });
        }

        [HttpGet("occupancy")]
        public async Task<IActionResult> GetOccupancyRate([FromQuery] string hotelId, [FromQuery] int totalRooms = 100)
        {
            if (string.IsNullOrEmpty(hotelId))
            {
                return BadRequest(new { success = false, message = "hotelId is required" });
            }

            var today = DateTime.UtcNow.Date;
            
            // Lấy tổng số đơn đặt phòng tạo trong ngày hôm nay của khách sạn
            var bookedRoomsToday = await _context.RevenueRecords
                .Where(r => r.HotelId == hotelId && r.CreatedAt >= today)
                .CountAsync();

            var occupancyRate = totalRooms > 0 ? (double)bookedRoomsToday / totalRooms * 100 : 0;

            return Ok(new
            {
                success = true,
                data = new
                {
                    hotelId,
                    date = today.ToString("yyyy-MM-dd"),
                    bookedRooms = bookedRoomsToday,
                    totalRooms,
                    occupancyRate = Math.Round(occupancyRate, 2)
                }
            });
        }
    }
}
