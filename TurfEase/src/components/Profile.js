import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    if (!userToken) {
      navigate("/");
      return;
    }

    const fetchProfileAndBookings = async () => {
      try {
        const profileResponse = await fetch(
          "http://localhost:5002/api/User/profile",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        const profileData = await profileResponse.json();

        const bookingResponse = await fetch(
          "http://localhost:5002/api/User/bookings",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        const bookingData = await bookingResponse.json();

        setProfile(profileData);
        setBookings(Array.isArray(bookingData) ? bookingData : []); // avoid map error
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch profile or bookings", error);
        navigate("/");
      }
    };

    fetchProfileAndBookings();
  }, [userToken, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container py-5" style={{ maxWidth: "800px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">
          Welcome,{" "}
          {profile.fullName || localStorage.getItem("userFullName") || "User"}
        </h2>

        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Profile Info Card */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">User Information</h5>
        </div>
        <div className="card-body">
          <p>
            <strong>Full Name:</strong> {profile.fullName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {profile.userEmail || "N/A"}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phoneNumber || "N/A"}
          </p>
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
  );
}
