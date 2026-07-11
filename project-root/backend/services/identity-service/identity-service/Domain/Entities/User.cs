using identity_service.Domain.Enums;

namespace identity_service.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();      // PK

        public string Email { get; set; } = null!;          // UQ - Required

        public string PasswordHash { get; set; } = null!;   // Required

        public string FullName { get; set; } = null!;

        public string? PhoneNumber { get; set; }          

        public Gender? Gender { get; set; }                

        public DateOnly? DateOfBirth { get; set; }       

        public string? AvatarUrl { get; set; }

        public UserStatus Status { get; set; } = UserStatus.Inactive;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }

        public string? ResetPasswordToken { get; set; }     // Mã OTP
        public DateTime? ResetPasswordTokenExpiry { get; set; } // Giờ hết hạn OTP
        public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();

      
        public virtual ICollection<UserSession> Sessions { get; set; } = new List<UserSession>();

       
     
    }
}