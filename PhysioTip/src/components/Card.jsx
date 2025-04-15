import React from "react";
import '../App.css';


const Card = ({ image, title, text, buttonText, link }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
    );
  };
export default Card