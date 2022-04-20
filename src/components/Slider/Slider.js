import React from 'react';

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto mt-5 mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/sjTQVZV/Slider2-1.jpg" className="d-block w-100  rounded" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/1GJHfGW/Slider1-1.jpg" className="d-block w-100 rounded" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/XWQ9Qxf/Slider3-1.jpg" className="d-block w-100 rounded" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;