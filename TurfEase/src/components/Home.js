import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div class="py-4 bg-theme" style={{ backgroundColor: "#587653" }}>
        <div class="container">
          <h1 class="text-start text-white text-center">TurfEase - Book Your Turf!</h1>
        </div>
      </div>

      <br/>

      {/* Courousel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide custom-carousel"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/turfimg2.jfif"
              className="d-block w-100 carousel-image"
              alt="Turf 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/turfimg1.jfif"
              className="d-block w-100 carousel-image"
              alt="Turf 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/turfimg3.jfif"
              className="d-block w-100 carousel-image"
              alt="Turf 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
      <br/>

      <div class="container">
      <div class="row">
          <div class="col-md-4">
            <img
              src="/assets/TurfEase.jpg"
              class="w-100 mb-3 about-img"
              loading="lazy"
              alt="sos-about"
              title="sos-about"
              height="auto"
              width="auto"
            />
          </div>
          <div class="col-md-8 d-flex align-items-center">
            <div class="about-content">
              <h2>About Us</h2>
              <div class="aboutdivider mb-4"></div>
              <p>
                Welcome to TurfZone, your all-in-one platform for discovering
                and booking sports turfs across your city. We are dedicated to
                making sports more accessible by eliminating the hassle of
                offline booking and scheduling. Players can instantly check turf
                availability, view pricing, and book their preferred slots
                online. Our clean and responsive interface ensures a smooth
                experience whether you're using a mobile, tablet, or desktop. We
                empower turf owners with tools to manage bookings, update turf
                details, and monitor payments in real time. With secure online payments, real-time
                confirmations, and easy cancellations, we keep it simple and
                safe. Our contact form allows players and turf managers to
                connect for special bookings or support queries. Built using
                React.js, Spring Boot, and MySQL, TurfZone is a modern solution
                for a modern sports community. 
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <br/>
    </>
  );
}
