import React from "react";

export default function Event() {
  return (
    <>
      <div class="py-4 bg-theme" style={{ backgroundColor: "#587653" }}>
        <div class="container">
          <h1 class="text-start text-white text-center">Book Event</h1>
        </div>
      </div>

      <div class="container py-5">
        <div class="row mb-4">
          <div class="col-12">
            <div class="d-flex flex-wrap justify-content-sm-start">
              <button
                type="button"
                class="btn m-1 top_city btn-dark"
                data-id=""
                id="city-all"
              >
                All
              </button>
              <button
                type="button"
                class="btn m-1 top_city btn-secondary"
                data-id="125"
              >
                Bandra
              </button>
              <button
                type="button"
                class="btn btn-secondary m-1 top_city"
                data-id="329"
              >
                Andheri
              </button>
              <button
                type="button"
                class="btn btn-secondary m-1 top_city"
                data-id="330"
              >
                Thane
              </button>
              <button
                type="button"
                class="btn btn-secondary m-1 top_city"
                data-id="337"
              >
                Dadar
              </button>
            </div>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
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
    </>
  );
}
