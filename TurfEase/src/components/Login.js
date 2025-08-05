import React, { useState } from "react";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggleRole = () => {
    setIsAdmin((prev) => !prev);
    setIsRegistering(false); // reset registration mode if toggled
  };

  const handleRegisterToggle = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div className="py-4" style={{ backgroundColor: "#587653" }}>
        <div className="container">
          <h1 className="text-center text-white">Login / Register</h1>
        </div>
      </div>

      {/* Card Section */}
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div
          className="card shadow-lg"
          style={{
            width: "100%",
            maxWidth: "450px",
            border: "1px solid #cfcfcf",
            borderRadius: "12px",
            background: "#f9f9f9",
          }}
        >
          <div className="card-body px-4 py-4">
            {/* Title */}
            <h4
              className="text-center mb-3"
              style={{ color: "#2e4f2e", fontWeight: "600" }}
            >
              {isAdmin
                ? "Admin Login"
                : isRegistering
                ? "User Registration"
                : "User Login"}
            </h4>

            {/* Toggle Admin/User */}
            <div className="text-center mb-3">
              <div className="form-check form-switch d-inline-flex align-items-center gap-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="roleToggle"
                  checked={isAdmin}
                  onChange={handleToggleRole}
                />
                <label className="form-check-label" htmlFor="roleToggle">
                  Switch to {isAdmin ? "User" : "Admin"}
                </label>
              </div>
            </div>

            {/* Form */}
            <form>
              {!isAdmin && isRegistering && (
                <>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
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
                      Phone Number
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
                  {isAdmin ? "Admin Email" : "User Email"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  {isAdmin ? "Admin Password" : "Password"}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn w-100 mb-3"
                style={{
                  backgroundColor: "#2e4f2e",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {isAdmin
                  ? "Login as Admin"
                  : isRegistering
                  ? "Register"
                  : "Login as User"}
              </button>
            </form>

            {/* Register/Login Toggle for User only */}
            {!isAdmin && (
              <div className="text-center">
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={handleRegisterToggle}
                  style={{ fontSize: "14px", color: "#2e4f2e" }}
                >
                  {isRegistering
                    ? "Already have an account? Login"
                    : "New user? Register here"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
