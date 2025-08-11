import React from "react";
import { useLocation } from "react-router";

export default function Payment() {
  const { state } = useLocation();
  const turf = state?.turf;

  if (!turf) {
    return <div className="text-center mt-5">No turf data available.</div>;
  }

  return (
    <>
      {/* Page Header */}
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
        <h1 style={{ margin: 0 }}>Payment</h1>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left Column: Image + Details */}
          <div className="col-lg-7">
            <div className="card shadow rounded-4 border-0 h-100">
              <img
                src={turf.image || "https://via.placeholder.com/600x300?text=No+Image"}
                alt={turf.name}
                className="card-img-top rounded-top-4"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2 className="fw-bold mb-2">{turf.name}</h2>
                <p className="text-muted">📍 {turf.location}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Info */}
          <div className="col-lg-5">
            <div className="p-4 border rounded shadow bg-light">
              <h5 className="fw-bold mb-3">Payment Details</h5>
              <h4 className="text-success mb-3">₹{turf.price || "N/A"}</h4>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input className="form-control" placeholder="Enter your phone" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" placeholder="Enter your email" />
              </div>

              <button className="btn btn-success w-100">Pay ₹{turf.price}</button>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-5">
          <h5 className="fw-bold mb-3">Location</h5>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(turf.address)}&output=embed`}
            width="100%"
            height="350"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
}
