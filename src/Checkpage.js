import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./checkpage.css";

const Checkpage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    clumpThickness: "",
    uniformCellSize: "",
    uniformCellShape: "",
    marginalAdhesion: "",
    singleEpithelialCellSize: "",
    bareNuclei: "",
    blandChromatin: "",
    normalNucleoli: "",
    mitoses: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", formValues);
    alert("Cancer prediction logic can be added here.");
  };

  return (
    <div className="form-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <FaArrowLeft aria-hidden="true" /> Back
      </div>

      <div className="illustration" aria-hidden="true"></div>

      <form onSubmit={handleSubmit} className="cancer-form">
        <h2>Enter Details</h2>

        {Object.entries(formValues).map(([key, value]) => (
          <label key={key} htmlFor={key}>
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            :
            <input
              id={key}
              name={key}
              type="number"
              value={value}
              onChange={handleChange}
              required
            />
          </label>
        ))}

        <button type="submit" className="predict-button">
          Predict Cancer
        </button>
      </form>
    </div>
  );
};

export default Checkpage;
