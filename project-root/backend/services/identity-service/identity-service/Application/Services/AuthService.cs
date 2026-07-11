using identity_service.Application.DTOs;
using identity_service.Application.Interfaces;
using identity_service.Domain.Entities;
using identity_service.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace identity_service.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtTokenGenerator _jwtTokenGenerator; 

 
        public AuthService(AppDbContext context, IPasswordHasher passwordHasher, IJwtTokenGenerator jwtTokenGenerator)
        {
            _context = context;
            _passwordHasher = passwordHasher;
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        public async Task<string> RegisterAsync(RegisterRequest request)
        {
            var existingUser = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);
            if (existingUser != null) throw new Exception("Email này đã được sử dụng!");

            var newUser = new User
            {
                Email = request.Email,
                FullName = request.FullName,
                PasswordHash = _passwordHasher.Hash(request.Password)
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            return $"Tài khoản {newUser.Email} đã tạo thành công!";
        }

        public async Task<TokenResponse> LoginAsync(LoginRequest request)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);

            if (user == null || !_passwordHasher.Verify(request.Password, user.PasswordHash))
            {
                throw new Exception("Email hoặc mật khẩu không chính xác!");
            }

         
            var accessToken = _jwtTokenGenerator.GenerateToken(user);
            var refreshTokenStr = _jwtTokenGenerator.GenerateRefreshToken();

            var refreshToken = new RefreshToken
            {
                Token = refreshTokenStr,
                UserId = user.Id,
                Expires = DateTime.UtcNow.AddDays(7) 
            };

            _context.RefreshTokens.Add(refreshToken);
            await _context.SaveChangesAsync();

            return new TokenResponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshTokenStr,
                ExpiresIn = 86400
            };
        }
        public async Task<string> ForgotPasswordAsync(ForgotPasswordRequest request)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                return "Nếu email hợp lệ, mã OTP sẽ được gửi đi.";
            }

            var otpCode = new Random().Next(100000, 999999).ToString();

            user.ResetPasswordToken = otpCode;
            user.ResetPasswordTokenExpiry = DateTime.UtcNow.AddMinutes(15);
            await _context.SaveChangesAsync();

            
            return $"[TESTING] Mã OTP của bạn là: {otpCode}";
        }

        public async Task<string> ResetPasswordAsync(ResetPasswordRequest request)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);

            if (user == null ||
                user.ResetPasswordToken != request.OtpCode ||
                user.ResetPasswordTokenExpiry < DateTime.UtcNow)
            {
                throw new Exception("Mã OTP không hợp lệ hoặc đã hết hạn!");
            }

            user.PasswordHash = _passwordHasher.Hash(request.NewPassword);

        
            user.ResetPasswordToken = null;
            user.ResetPasswordTokenExpiry = null;

            await _context.SaveChangesAsync();

            return "Mật khẩu của bạn đã được thay đổi thành công!";
        }
    }
}