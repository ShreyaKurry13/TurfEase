import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Event() {
  const [turfs, setTurfs] = useState([]);
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = ["All", "Bandra", "Andheri", "Thane", "Dadar", "Goregaon", "Borivali"];

  useEffect(() => {
    fetchAllTurfs();
  }, []);

  const fetchAllTurfs = async () => {
    try {
      const response = await axios.get("http://localhost:8787/turfs");
      setTurfs(response.data);
      setFilteredTurfs(response.data);
    } catch (error) {
      console.error("Error fetching turfs:", error);
    }
  };

  const handleFilter = async (location) => {
    setSelectedLocation(location);

    if (location === "All") {
      setFilteredTurfs(turfs);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8787/turfs/${location}`);
      setFilteredTurfs(response.data);
    } catch (error) {
      console.error("Error filtering turfs:", error);
    }
  };

  return (
    <>
      <div className="py-4" style={{ backgroundColor: "#587653" }}>
        <div className="container">
          <h1 className="text-white text-center">Book Event</h1>
        </div>
      </div>

      <div className="container py-5">
        {/* Location Filter Buttons */}
        <div className="mb-4 d-flex flex-wrap justify-content-center">
          {locations.map((location, idx) => (
            <button
              key={idx}
              className={`btn m-2 ${
                selectedLocation === location ? "btn-danger" : "btn-outline-success"
              }`}
              onClick={() => handleFilter(location)}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Turf Cards */}
        <div className="row g-4">
          {filteredTurfs.length > 0 ? (
            filteredTurfs.map((turf, idx) => (
              <div className="col-sm-6 col-md-4" key={idx}>
                <div className="card h-100 shadow-lg rounded-4 border-0">
                  <img
                    src={turf.image || "https://via.placeholder.com/300x200?text=No+Image"}
                    className="card-img-top rounded-top-4"
                    alt={turf.name}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-success">{turf.name}</h5>
                    <p className="card-text text-muted">
                      {turf.description || "No description available."}
                    </p>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-between">
                    <span className="badge bg-primary">
                      📍 {turf.location || "Unknown"}
                    </span>
                    <span className="badge bg-success">
                      ₹ {turf.price ? turf.price : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No turfs available for this location.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
