using AnalyticsService.Models;
using Microsoft.EntityFrameworkCore;

namespace AnalyticsService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<RevenueRecord> RevenueRecords { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // To match the previous Node.js Prisma table name if any, but since we are recreating it:
            modelBuilder.Entity<RevenueRecord>().ToTable("RevenueRecords");
        }
    }
}
