import React, { useState } from "react";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggle = () => {
    setIsAdmin((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div className="py-4" style={{ backgroundColor: "#2e4f2e" }}>
        <div className="container">
          <h1 className="text-center text-white">Login</h1>
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
            <h4
              className="text-center mb-3"
              style={{ color: "#2e4f2e", fontWeight: "600" }}
            >
              {isAdmin ? "Admin Login" : "User Login"}
            </h4>

            {/* Toggle Switch */}
            <div className="text-center mb-4">
              <div className="form-check form-switch d-inline-flex align-items-center gap-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="roleToggle"
                  checked={isAdmin}
                  onChange={handleToggle}
                />
                <label className="form-check-label" htmlFor="roleToggle">
                  Switch to {isAdmin ? "User" : "Admin"}
                </label>
              </div>
            </div>

            {/* Login Form */}
            <form>
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
                  {isAdmin ? "Admin Password" : "User Password"}
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
                className="btn w-100"
                style={{
                  backgroundColor: "#2e4f2e",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {isAdmin ? "Login as Admin" : "Login as User"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
