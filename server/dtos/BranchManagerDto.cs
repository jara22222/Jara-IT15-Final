using System.ComponentModel.DataAnnotations;

public class BranchManagerDto 
{
    [Required(ErrorMessage = "First name is required")]
    [MaxLength(20, ErrorMessage = "First name cannot exceed 20 characters")]
    public string Firstname { get; set; } = string.Empty;

    [MaxLength(20, ErrorMessage = "Middle name cannot exceed 20 characters")]
    public string? Middlename { get; set; } = string.Empty; // Optional

    [Required(ErrorMessage = "Last name is required")]
    [MaxLength(20, ErrorMessage = "Last name cannot exceed 20 characters")]
    public string Lastname { get; set; } = string.Empty;
    
    [Required(ErrorMessage = "Email address is required")]
    [EmailAddress(ErrorMessage = "Invalid email address format")]
    [MaxLength(50, ErrorMessage = "Email cannot exceed 50 characters")]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Branch assignment is required")]
    [MaxLength(50, ErrorMessage = "Branch name cannot exceed 50 characters")]
    public string Branch { get; set; } = string.Empty;

    [Required(ErrorMessage = "User role is required")]
    [MaxLength(50, ErrorMessage = "Role cannot exceed 50 characters")]
    public string Role { get; set; } = string.Empty;

    [Required(ErrorMessage = "Phone number is required")]
    [MaxLength(11, ErrorMessage = "Phone number must be 11 digits")]
    [MinLength(11, ErrorMessage = "Phone number must be 11 digits")]
    public string Phonenumber { get; set; } = string.Empty;
}