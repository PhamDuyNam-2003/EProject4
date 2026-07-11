using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using identity_service.Application.Interfaces;
using identity_service.Domain.Entities;
using Microsoft.IdentityModel.Tokens;

namespace identity_service.Infrastructure.Security
{
    public class JwtTokenGenerator : IJwtTokenGenerator
    {
        private readonly IConfiguration _configuration;

        public JwtTokenGenerator(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        public string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using var rng = System.Security.Cryptography.RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }
        public string GenerateToken(User user)
        {
            var secretKey = _configuration["JwtSettings:Secret"];
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey!));

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()), 
                new Claim(JwtRegisteredClaimNames.Email, user.Email),       
                new Claim("FullName", user.FullName)                      
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature),
                Issuer = _configuration["JwtSettings:Issuer"],
                Audience = _configuration["JwtSettings:Audience"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}