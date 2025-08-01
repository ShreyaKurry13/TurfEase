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
      <div class="card" style={{width: '18rem'}}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          {/* <div class="card-body">
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div> */}
        </div>
      </div>
      <br/>
    </>
  );
}
