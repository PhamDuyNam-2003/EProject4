using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace identity_service.Controllers
{
    [Route("api/v1/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("profile")]
        [Authorize] 
        public IActionResult GetMyProfile()
        {
            
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var email = User.FindFirst(ClaimTypes.Email)?.Value;
            var fullName = User.FindFirst("FullName")?.Value;

            return Ok(new
            {
                Message = "Chúc mừng! Bạn đã vào được Khu vực Tuyệt mật!",
                SecretData = new
                {
                    Id = userId,
                    Email = email,
                    Name = fullName
                }
            });
        }
    }
}