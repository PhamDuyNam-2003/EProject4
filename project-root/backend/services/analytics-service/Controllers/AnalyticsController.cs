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
        public async Task<IActionResult> GetRevenueHistory([FromQuery] string? hotelId, [FromQuery] int days = 7)
        {
            var fromDate = DateTime.UtcNow.AddDays(-days);

            var query = _context.RevenueRecords.Where(r => r.CreatedAt >= fromDate);

            if (!string.IsNullOrEmpty(hotelId))
            {
                query = query.Where(r => r.HotelId == hotelId);
            }

            var history = await query
                .GroupBy(r => r.CreatedAt.Date)
                .Select(g => new
                {
                    Date = g.Key.ToString("yyyy-MM-dd"),
                    Revenue = g.Sum(x => x.Amount),
                    Orders = g.Count()
                })
                .OrderBy(x => x.Date)
                .ToListAsync();

            return Ok(new
            {
                success = true,
                data = history
            });
        }
    }
}
