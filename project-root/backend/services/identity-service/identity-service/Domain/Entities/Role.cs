namespace identity_service.Domain.Entities
{
    public class Role
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public string Name { get; set; } = null!;      

        public string? Description { get; set; }

       
        public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
    }
}