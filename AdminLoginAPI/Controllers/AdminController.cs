using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using OracleAdminLoginAPI.Models;


namespace OracleAdminLoginAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly string _connectionString;

        public AdminController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }


        [HttpPost("login")]
        public IActionResult Login([FromBody] Admin loginRequest)
        {
            // Hardcoded credentials
            string validUsername = "admin";
            string validPassword = "password123";

            if (loginRequest.Username == validUsername && loginRequest.Password == validPassword)
            {
                return Ok(new { message = "Login successful" });
            }
            else
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }
        }



        [HttpPost]
        public IActionResult AddAdmin([FromBody] Admin newAdmin)
        {
            try
            {
                using (var conn = new OracleConnection(_connectionString))
                {
                    conn.Open();
                    string query = "INSERT INTO ADMIN (NAME, PASSWORD) VALUES (:name, :password)";

                    using (var cmd = new OracleCommand(query, conn))
                    {
                        cmd.Parameters.Add(new OracleParameter("name", newAdmin.Username));
                        cmd.Parameters.Add(new OracleParameter("password", newAdmin.Password));

                        int rowsInserted = cmd.ExecuteNonQuery();

                        if (rowsInserted > 0)
                            return Ok(new { message = "Admin added successfully" });
                        else
                            return BadRequest(new { message = "Failed to add admin" });
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Database error", error = ex.Message });
            }
        }


        [HttpGet]
        public IActionResult GetAllAdmins()
        {
            try
            {
                var admins = new List<Admin>();

                using (var conn = new OracleConnection(_connectionString))
                {
                    conn.Open();
                    string query = "SELECT NAME, PASSWORD FROM ADMIN";

                    using (var cmd = new OracleCommand(query, conn))
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            admins.Add(new Admin
                            {
                                Username = reader.GetString(0),
                                Password = reader.GetString(1)
                            });
                        }
                    }
                }

                if (admins.Count == 0)
                {
                    return NotFound(new { message = "No admins found" });
                }

                return Ok(admins);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Database error", error = ex.Message });
            }
        }


        [HttpDelete("{username}")]
        public IActionResult DeleteAdmin(string username)
        {
            try
            {
                using (var conn = new OracleConnection(_connectionString))
                {
                    conn.Open();
                    string query = "DELETE FROM ADMIN WHERE NAME = :name";

                    using (var cmd = new OracleCommand(query, conn))
                    {
                        cmd.Parameters.Add(new OracleParameter("name", username));

                        int rowsAffected = cmd.ExecuteNonQuery();

                        if (rowsAffected > 0)
                            return Ok(new { message = $"Admin '{username}' deleted successfully" });
                        else
                            return NotFound(new { message = $"Admin '{username}' not found" });
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Database error", error = ex.Message });
            }
        }
    }



}
