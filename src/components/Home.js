import React from "react";
import './Home.css';

export default function Home() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
       data-bs-interval="2500"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/turfimg1.jfif" className="d-block w-100 carousel-image" alt="Turf 1" />
        </div>
        <div className="carousel-item">
          <img src="/assets/turfimg2.jfif" className="d-block w-100 carousel-image" alt="Turf 2" />
        </div>
        <div className="carousel-item">
          <img src="/assets/turfimg3.jfif" className="d-block w-100 carousel-image" alt="Turf 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
