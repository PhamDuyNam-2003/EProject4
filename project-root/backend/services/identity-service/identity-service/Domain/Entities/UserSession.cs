namespace identity_service.Domain.Entities
{
    public class UserSession
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public Guid UserId { get; set; }
        public virtual User User { get; set; } = null!;

        public string DeviceInfo { get; set; } = null!; 

        public string IpAddress { get; set; } = null!;

        public DateTime LoginTime { get; set; } = DateTime.UtcNow;

        public DateTime? LogoutTime { get; set; }

        public bool IsActive { get; set; } = true;
    }
}