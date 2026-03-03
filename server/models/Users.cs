using System.ComponentModel.DataAnnotations;

namespace server.models
{
    public class Users
    {   
        [Key]
        [MaxLength(36)]
        public string UserId { get; set; } = Guid.NewGuid().ToString();
        [MaxLength(30)]
        public string Firstname { get; set; } = string.Empty;
        [MaxLength(30)]
        public string Middlename { get; set; } = string.Empty;
        [MaxLength(30)]
        public string Lastname { get; set; } = string.Empty;
        [MaxLength(50)]
        public string Username { get; set; } = string.Empty;
        [EmailAddress]
        [MaxLength(50)]
        public string Email { get; set; } = string.Empty;
        [MaxLength(11)]
        public string Phonenumber { get; set; } = string.Empty;
        [MaxLength(255)]
        public string Password { get; set; } = string.Empty;
        [MaxLength(50)]
        public string Role { get; set; } = string.Empty;
        [MaxLength(50)]
        public string Branch { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        
        
    }
}