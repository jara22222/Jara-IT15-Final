using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.data;
using server.dtos;
using server.models;
using Server.Services;
using Microsoft.EntityFrameworkCore; // Add this line
using BC = BCrypt.Net.BCrypt;
namespace server.controller.logincontroller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly TokenService _tokenService;
        
        public AuthController(AppDbContext context, TokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto logindto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var user = await _context.Users.FirstOrDefaultAsync(u=> u.Username == logindto.Username);

            if (user == null)
                    return Unauthorized(new { message = "This account does not exist on our system" });

            bool isPasswordCorrect = BC.Verify(logindto.Password, user.Password);
                    
            if (!isPasswordCorrect)
                    return Unauthorized(new { message = "Invalid password" });

            if (user.Username != logindto.Username)
                    return Unauthorized(new { message = "Invalid username" });

            var roles = new List<string> { user.Role };

            var token = _tokenService.CreateToken(user, roles);

            return Ok(new
            {
                token,
                user = new
                {
                    id = user.UserId,
                    userName = user.Username,
                    firstName = user.Firstname,
                    lastName = user.Lastname,
                    role = user.Role,
                    branch = user.Branch
                }
            });
        }
    }
}