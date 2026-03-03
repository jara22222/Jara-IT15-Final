using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net.BCrypt;
using server.models;
using server.dtos;
using server.data;
using Microsoft.AspNetCore.Authorization;
namespace server.controller.superadmincontroller
{
    [ApiController]
    [Route("api/[controller]")]
    public class BranchManagerController : ControllerBase
    {
       
        private readonly AppDbContext _context;
        
        public BranchManagerController(AppDbContext context)
        {
                _context = context;
        }
        [Authorize(Roles = "SuperAdmin")]
        [HttpPost("add-branchmanager")]
        public async Task<IActionResult> PostAsync([FromBody] BranchManagerDto branchmanagerDto)
        {
             if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var exists = await _context.Users.AnyAsync(u => u.Email == branchmanagerDto.Email);
                if (exists) return BadRequest(new { message = "Email already registered." });

                var username = branchmanagerDto.Lastname+"KicksLogix";
                var password = branchmanagerDto.Lastname+"123";

                var users = new Users
                {   
                    Firstname = branchmanagerDto.Firstname,
                    Middlename = branchmanagerDto.Middlename??"N/A",
                    Lastname= branchmanagerDto.Lastname,
                    Username= username,
                    Email= branchmanagerDto.Email,
                    Phonenumber= branchmanagerDto.Phonenumber,
                    Password= BC.HashPassword(password),
                    Role= branchmanagerDto.Role,
                    Branch= branchmanagerDto.Branch,
                    IsActive=true
                };

                    _context.Users.Add(users);
                    await _context.SaveChangesAsync();

                    return Ok(new {
                            message= "Branch Manager account created and role assigned successfully!"
                        });
            }
          
            catch (System.Exception ex)
            {
                
               return StatusCode(500, new {
                    message = "An internal server error occurred.",
                    systemError = ex.Message,
                    details = ex.InnerException?.Message });
            }
        }   
    }
}