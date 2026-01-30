// Preventions.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Use React Icons instead of fontawesome CSS
import "./Prevention.css";

const preventionsData = [
  // ... keep your 20+ prevention objects here ...
];

function Prevention() {
  const navigate = useNavigate();

  return (
    <div className="preventions-container">
      {/* Back arrow at the top left */}
      <div className="back-arrow" onClick={() => navigate("/home")}>
        <FaArrowLeft size={20} />
      </div>

      <h2 className="preventions-heading">Prevent Cancer with Knowledge</h2>

      <div className="cards-container-prev">
        {preventionsData.map((prevention, index) => (
          <div className="card-prevention" key={index}>
            <img
              src={prevention.image}
              alt={prevention.title}
              className="card-image-prev"
            />
            <h3 className="card-title-prev">{prevention.title}</h3>
            <p className="card-description-prev">{prevention.description}</p>
            <a
              href={prevention.link}
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more-btn"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prevention;
