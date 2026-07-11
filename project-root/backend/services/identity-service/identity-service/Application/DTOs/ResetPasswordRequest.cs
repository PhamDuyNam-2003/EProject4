using System.ComponentModel.DataAnnotations;

namespace identity_service.Application.DTOs
{
    public class ResetPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        public string OtpCode { get; set; } = null!; // Mã xác nhận gửi qua email

        [Required]
        [MinLength(6)]
        public string NewPassword { get; set; } = null!;
    }
}