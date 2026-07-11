using System.ComponentModel.DataAnnotations;

namespace identity_service.Application.DTOs
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;
    }
}