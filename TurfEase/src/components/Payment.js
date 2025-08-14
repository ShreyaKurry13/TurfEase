import React, { useState } from "react";
import { useLocation } from "react-router";

export default function Payment() {
  const { state } = useLocation();
  const turf = state?.turf;

  const [selectedDate, setSelectedDate] = useState(() => {
    // Default to today's date in yyyy-mm-dd format
    return new Date().toISOString().slice(0, 10);
  });

  if (!turf) {
    return <div className="text-center mt-5">No turf data available.</div>;
  }

  // Filter slots by selectedDate
  const filteredSlots = turf.slots.filter(
    (slot) => slot.slotDate === selectedDate
  );

  function formatTime(timeStr) {
    const [hour, minute] = timeStr.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${minute} ${ampm}`;
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
        <h1 style={{ margin: 0 }}>Available Slots</h1>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-7">
            <div className="card shadow rounded-4 border-0 h-100">
              <img
                src={
                  turf.image ||
                  "https://via.placeholder.com/600x300?text=No+Image"
                }
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

          {/* Right Column */}
          <div className="col-lg-5">
            <div className="p-4 border rounded shadow bg-light">
              <h5 className="fw-bold mb-3">Select Date</h5>
              <input
                type="date"
                className="form-control mb-4"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
              />

              <h5 className="fw-bold mb-3">Available Slots</h5>
              {filteredSlots.length === 0 ? (
                <p className="text-muted">No slots available for this date.</p>
              ) : (
                <div className="row g-2">
                  {filteredSlots.map((slot) => (
                    <div key={slot.id} className="col-6 col-md-4">
                      <div
                        className={`text-white text-center rounded px-2 py-2 small fw-semibold ${
                          slot.isBooked ? "bg-danger" : "bg-success"
                        }`}
                        style={{ fontSize: "0.85rem" }}
                      >
                        {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-5">
          <h5 className="fw-bold mb-3">Location</h5>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              turf.address
            )}&output=embed`}
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
