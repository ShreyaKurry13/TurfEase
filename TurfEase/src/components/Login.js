import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Login.css';

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleToggleRole = () => {
    setIsAdmin((prev) => !prev);
    setIsRegistering(false);
    setErrorMessage("");
  };

  const handleRegisterToggle = () => {
    setIsRegistering((prev) => !prev);
    setErrorMessage("");
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
  
    try {
      const response = await fetch("http://localhost:5002/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: adminUsername,
          password: adminPassword,
        }),
      });
  
      const result = await response.json();
      console.log("Response:", result); // optional for debugging
  
      if (response.ok) {
        localStorage.setItem("token", "dummy-token"); // Replace with real token later
        navigate("/dashboard");
      } else {
        setErrorMessage(result.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="py-4 bg-theme" style={{ backgroundColor: "#355E3B" }}>
        <div className="container">
          <h1 className="text-center text-white">Login / Register</h1>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center py-5">
        <div
          className="card shadow-lg w-100"
          style={{
            maxWidth: "450px",
            border: "1px solid #cfcfcf",
            borderRadius: "12px",
            background: "#f9f9f9",
          }}
        >
          <div className="card-body px-4 py-4">
            <h4 className="text-center mb-3" style={{ color: "blue", fontWeight: "600" }}>
              {isAdmin ? "Admin Login" : isRegistering ? "User Registration" : "User Login"}
            </h4>

            <div className="text-center mb-4">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span style={{ fontWeight: "500" }}>
                  {isAdmin ? "Switch to User" : "Switch to Admin"}
                </span>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={handleToggleRole}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <form onSubmit={isAdmin ? handleAdminLogin : undefined}>
              {!isAdmin && isRegistering && (
                <>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </>
              )}

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {isAdmin ? "Username" : "User Email"} <span className="text-danger">*</span>
                </label>
                <input
                  type={isAdmin ? "text" : "email"}
                  className="form-control"
                  id="email"
                  placeholder={isAdmin ? "Enter username" : "Enter your email"}
                  required
                  value={isAdmin ? adminUsername : undefined}
                  onChange={(e) => isAdmin && setAdminUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  {isAdmin ? "Admin Password" : "Password"} <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                  value={isAdmin ? adminPassword : undefined}
                  onChange={(e) => isAdmin && setAdminPassword(e.target.value)}
                />
              </div>

              {errorMessage && (
                <div className="mb-3 text-danger text-center">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="btn w-100 mb-3"
                style={{ backgroundColor: "#ffc107", color: "#000", fontWeight: "bold" }}
              >
                {isAdmin ? "Login as Admin" : isRegistering ? "Register" : "Login as User"}
              </button>
            </form>

            {!isAdmin && (
              <div className="text-center">
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={handleRegisterToggle}
                  style={{ fontSize: "14px", color: "green" }}
                >
                  {isRegistering ? "Already have an account? Login" : "New user? Register here"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}