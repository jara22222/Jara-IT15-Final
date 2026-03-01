using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net.BCrypt;
using server.models;


namespace server.data.DbSeeders
{
    public class DbSeeders
    {

    public static async Task SeedAsync(AppDbContext context)
    {
        if (!await context.Users.AnyAsync(u => u.Username == "admin"))
            {
                var adminUser = new Users
                {
                    UserId = Guid.NewGuid().ToString(),
                    Firstname = "System",
                    Middlename = "Admin",
                    Lastname = "Admin",
                    Username = "admin",
                    Email = "admin@kickslogix.com",
                    Phonenumber = "09123456789",
                    Password = BC.HashPassword("SuperAdmin@2026"),
                    Role = "SuperAdmin",
                    Branch = "Main",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                };
                context.Users.Add(adminUser);
                await context.SaveChangesAsync();
                Console.WriteLine("--> Database Seeded: Admin account created.");
            }
        
    }
       
    
    }
}