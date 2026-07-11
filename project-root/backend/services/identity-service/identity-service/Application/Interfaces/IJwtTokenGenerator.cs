using identity_service.Domain.Entities;

namespace identity_service.Application.Interfaces
{
    public interface IJwtTokenGenerator
    {
        string GenerateToken(User user);
        string GenerateRefreshToken();
    }
}