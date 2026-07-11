using identity_service.Application.DTOs;

namespace identity_service.Application.Interfaces
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(RegisterRequest request);
        Task<TokenResponse> LoginAsync(LoginRequest request);
        Task<string> ForgotPasswordAsync(ForgotPasswordRequest request);
        Task<string> ResetPasswordAsync(ResetPasswordRequest request);
    }
}