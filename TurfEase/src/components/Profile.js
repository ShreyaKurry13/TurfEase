import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken");
  
  console.log("User token:", userToken);
  console.log("User data from localStorage:", {
    fullName: localStorage.getItem("userFullName"),
    email: localStorage.getItem("userEmail"),
    phone: localStorage.getItem("userPhone")
  });

  // Test API endpoint
  if (userToken) {
    fetch("http://localhost:5002/api/User", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("Direct API test result:", data);
    })
    .catch(error => {
      console.log("Direct API test error:", error);
    });
  }

  useEffect(() => {
    if (!userToken) {
      navigate("/login");
      return;
    }

    const fetchProfileAndBookings = async () => {
      console.log("=== fetchProfileAndBookings function called ===");
      try {
        // Get current user's email from localStorage
        const currentUserEmail = localStorage.getItem("userEmail");
        console.log("Searching for user with email:", currentUserEmail);
        console.log("All localStorage items:", {
          userToken: localStorage.getItem("userToken"),
          userEmail: localStorage.getItem("userEmail"),
          userFullName: localStorage.getItem("userFullName"),
          userPhone: localStorage.getItem("userPhone")
        });
        
        if (!currentUserEmail) {
          console.log("No user email found in localStorage");
          setLoading(false);
          return;
        }
        
        // Fetch all users from the database
        const response = await fetch("http://localhost:5002/api/User");
        const allUsers = await response.json();
        console.log("All users from database:", allUsers);
        
        // Search for the current user by email
        const currentUser = allUsers.find(user => user.userEmail === currentUserEmail);
        
        if (currentUser) {
          console.log("Found user in database:", currentUser);
          console.log("About to set profile with:", currentUser);
          setProfile(currentUser);
          console.log("setProfile called successfully");
        } else {
          console.log("User not found in database");
          console.log("Available users:", allUsers.map(u => ({ email: u.userEmail, name: u.fullName })));
          setProfile({});
        }

        // Set empty bookings for now
        setBookings([]);
        
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch profile or bookings", error);
        // Don't redirect on API error, just show loading as false
        setLoading(false);
      }
    };

    console.log("useEffect triggered - userToken:", userToken);
    fetchProfileAndBookings();
  }, [userToken, navigate]);

  const handleLogout = () => {
    // Clear all user-related data
    localStorage.removeItem("userToken");
    localStorage.removeItem("userFullName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPhone");
    
    // Clear any other potential user data
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    
    console.log("Logged out - cleared all user data");
    navigate("/");
  };

  const handleRefreshProfile = async () => {
    setLoading(true);
    try {
      // Get current user's email from localStorage
      const currentUserEmail = localStorage.getItem("userEmail");
      console.log("Refreshing profile for user:", currentUserEmail);
      
      if (!currentUserEmail) {
        console.log("No user email found in localStorage");
        setLoading(false);
        return;
      }
      
      // Fetch all users from the database
      const response = await fetch("http://localhost:5002/api/User");
      const allUsers = await response.json();
      console.log("All users from database:", allUsers);
      
      // Search for the current user by email
      const currentUser = allUsers.find(user => user.userEmail === currentUserEmail);
      
      if (currentUser) {
        console.log("Found user in database:", currentUser);
        setProfile(currentUser);
      } else {
        console.log("User not found in database");
        setProfile({});
      }
    } catch (error) {
      console.error("Failed to refresh profile", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-5" style={{ marginTop: "80px" }}>Loading...</div>;

  return (
    <>

<div
        className="text-white text-center"
        style={{
          backgroundColor: "#355E3B",
          height: "120px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Profile</h1>
      </div>

    <div className="container" style={{ maxWidth: "800px", marginTop: "40px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">
          Welcome, {profile.fullName || profile.name || "User"}
        </h2>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary" onClick={handleRefreshProfile}>
            Refresh Profile
          </button>
          


          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Profile Info Card */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">User Information</h5>
        </div>
        <div className="card-body">
          <p>
            <strong>Full Name:</strong> {profile.fullName || profile.name || "Not available"}
          </p>
          <p>
            <strong>Email:</strong> {profile.userEmail || profile.email || "Not available"}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phoneNumber || profile.phone || "Not available"}
          </p>
          <p>
            <strong>User ID:</strong> {profile.id || profile.userId || "Not available"}
          </p>
          

          
          {(!profile.fullName && !profile.name) && (
            <div className="alert alert-warning mt-3">
              <small>Note: Some profile information may not be available. Please contact support if this persists.</small>
            </div>
          )}
        </div>
      </div>

      {/* Booking History Section */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Booking History</h5>
        </div>
        <div className="card-body">
          {bookings.length === 0 ? (
            <p className="text-muted">No bookings found.</p>
          ) : (
            <div className="list-group">
              {bookings.map((booking, idx) => (
                <div
                  key={idx}
                  className="list-group-item list-group-item-action mb-2 border rounded shadow-sm"
                >
                  <p className="mb-1">
                    <strong>Booking ID:</strong> {booking.id}
                  </p>
                  <p className="mb-1">
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p className="mb-0">
                    <strong>Details:</strong> {booking.details}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

    </>
  );
}
