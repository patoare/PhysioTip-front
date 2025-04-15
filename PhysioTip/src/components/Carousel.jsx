import React from "react";
import '../App.css';
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
const Carousel = () => {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel"  >
      <div className="carousel-inner" >
        <div className="carousel-item active">
          <img src={foto1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item ">
          <img src={foto2} className="d-block w-100" alt="Slide 2" />
        </div>
      </div>
    </div>
        </>
    )
}

export default Carousel;