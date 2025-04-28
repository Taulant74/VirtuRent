namespace BackendAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Phone { get; set; }
        public byte[] PasswordHash { get; set; } = null!;
        public char Role { get; set; }  // C = customer, S = seller, A = admin
    }

}
