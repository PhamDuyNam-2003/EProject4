namespace Inventory_service.Application.Interfaces
{
    public interface IRedisLockService
    {
        Task<bool> AcquireLockAsync(string lockKey, string lockValue, TimeSpan expiry);
        Task ReleaseLockAsync(string lockKey, string lockValue);
    }
}
