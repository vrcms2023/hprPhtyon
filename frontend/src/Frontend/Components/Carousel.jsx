import React from "react";
import banner1 from "../../Images/carousel1.jpg";
import banner2 from "../../Images/carousel2.jpg";
import banner3 from "../../Images/carousel3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="homeCarousel carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            // src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            src={banner1}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-white fw-bold">Welcome to HPR Infra</h1>
            <p className="fs-5">Your trusted real estate partner in Hyderabad! With decades of experience</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            // src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            src={banner2}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-white fw-bold">AT HPR Infra</h1>
            <p className="fs-5">Innovation meets excellence as we craft spaces that reflect our commitment to quality.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            // src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            src={banner3}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-white fw-bold">HPR INFRA</h1>
            <p className="fs-5">A beacon of innovation in Hyderabad's real estate landscape.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
