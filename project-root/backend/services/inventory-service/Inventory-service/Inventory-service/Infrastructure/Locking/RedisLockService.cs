using StackExchange.Redis;
using Inventory_service.Application.Interfaces;

namespace Inventory_service.Infrastructure.Locking
{
    public class RedisLockService : IRedisLockService
    {
        private readonly IDatabase _redisDb;

        public RedisLockService(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("RedisConnection");
            var redis = ConnectionMultiplexer.Connect(connectionString!);
            _redisDb = redis.GetDatabase();
        }

        // Lệnh Cốt Lõi: Tạo một ổ khóa ảo. Chỉ thành công khi ổ khóa CHƯA TỒN TẠI (When.NotExists)
        public async Task<bool> AcquireLockAsync(string lockKey, string lockValue, TimeSpan expiry)
        {
            return await _redisDb.StringSetAsync(lockKey, lockValue, expiry, When.NotExists);
        }

        // Mở khóa sau khi đã lưu DB xong, hoặc khi có lỗi xảy ra
        public async Task ReleaseLockAsync(string lockKey, string lockValue)
        {
            var currentValue = await _redisDb.StringGetAsync(lockKey);
            if (currentValue == lockValue)
            {
                await _redisDb.KeyDeleteAsync(lockKey);
            }
        }
    }
}
