using Microsoft.AspNetCore.Mvc;
using OracleAdminLoginAPI.Models;
using OracleAdminLoginAPI.Data;

namespace OracleAdminLoginAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly AdminDbContext _context;

        public AdminController(AdminDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Admin loginRequest)
        {
            if (loginRequest is null || string.IsNullOrWhiteSpace(loginRequest.Username) || string.IsNullOrWhiteSpace(loginRequest.Password))
                return BadRequest(new { message = "Username and Password are required" });

            var admin = _context.Admins.FirstOrDefault(a =>
                a.Username == loginRequest.Username && a.Password == loginRequest.Password);

            if (admin != null)
                return Ok(new { message = "Login successful" });

            return Unauthorized(new { message = "Invalid credentials" });
        }

        [HttpPost]
        public IActionResult AddAdmin([FromBody] Admin newAdmin)
        {
            if (string.IsNullOrWhiteSpace(newAdmin.Username) || string.IsNullOrWhiteSpace(newAdmin.Password))
                return BadRequest(new { message = "Username and Password are required" });

            _context.Admins.Add(newAdmin);
            _context.SaveChanges();

            return Ok(new { message = "Admin added successfully" });
        }

        [HttpGet]
        public IActionResult GetAllAdmins()
        {
            var admins = _context.Admins.ToList();

            if (!admins.Any())
                return NotFound(new { message = "No admins found" });

            return Ok(admins);
        }

        [HttpDelete("{username}")]
        public IActionResult DeleteAdmin(string username)
        {
            var admin = _context.Admins.FirstOrDefault(a => a.Username == username);
            if (admin == null)
                return NotFound(new { message = $"Admin '{username}' not found" });

            _context.Admins.Remove(admin);
            _context.SaveChanges();

            return Ok(new { message = $"Admin '{username}' deleted successfully" });
        }
    }
}
