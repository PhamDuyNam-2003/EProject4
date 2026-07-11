// Sử dụng Alias (DTOs) để báo cho C# biết chỉ dùng các class trong thư mục DTOs của chúng ta, bỏ qua của Microsoft
using identity_service.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using DTOs = identity_service.Application.DTOs;

namespace identity_service.Controllers
{
    [Route("api/v1/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] DTOs.RegisterRequest request)
        {
            try
            {
                var resultMessage = await _authService.RegisterAsync(request);
                return Ok(new { Message = resultMessage });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] DTOs.LoginRequest request)
        {
            try
            {
                var tokenResponse = await _authService.LoginAsync(request);
                return Ok(tokenResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }
        }

      
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] DTOs.ForgotPasswordRequest request)
        {
            var message = await _authService.ForgotPasswordAsync(request);
            return Ok(new { Message = message });
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] DTOs.ResetPasswordRequest request)
        {
            try
            {
                var message = await _authService.ResetPasswordAsync(request);
                return Ok(new { Message = message });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Error = ex.Message });
            }
        }
    }
}