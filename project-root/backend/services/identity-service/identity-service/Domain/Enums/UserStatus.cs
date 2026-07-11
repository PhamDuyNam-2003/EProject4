namespace identity_service.Domain.Enums
{
    public enum UserStatus
    {
        Active = 1,     // Đang hoạt động
        Inactive = 2,   // Chưa kích hoạt email
        Locked = 3,     // Bị khóa (nhập sai pass nhiều lần)
        Banned = 4      // Bị cấm (vi phạm)
    }
}