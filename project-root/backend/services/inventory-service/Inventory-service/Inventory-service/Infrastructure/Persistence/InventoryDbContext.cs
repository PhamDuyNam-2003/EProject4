using Inventory_service.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Inventory_service.Infrastructure.Persistence
{
    public class InventoryDbContext : DbContext
    {
        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options) { }

        public DbSet<RoomInventory> RoomInventories { get; set; }
        public DbSet<RoomLock> RoomLocks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<RoomLock>()
                .HasIndex(x => new { x.CheckInTime, x.CheckOutTime });
        }
    }
}
