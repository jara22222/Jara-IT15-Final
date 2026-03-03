using System.ComponentModel.DataAnnotations;
namespace server.models
{
    public class AuditLogs
    {
        [Key]
        [MaxLength(36)]
        public string AuditId { get; set; } = Guid.NewGuid().ToString();
        [MaxLength(50)]
        public string PerformedBy { get; set; } = string.Empty;
        [MaxLength(50)]
        public string PerformedIn { get; set; } = string.Empty;
        [MaxLength(50)]
        public string Action { get; set; } = string.Empty;
        [MaxLength(255)]
        public string Description { get; set; } = string.Empty;
        public DateTime DatePerformed { get; set; } = DateTime.UtcNow;
    }
}