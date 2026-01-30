import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { FaArrowLeft } from "react-icons/fa"; // Import the Font Awesome back arrow icon
import "./checkpage.css";

const Checkpage = () => {
  const navigate = useNavigate(); // Initialize navigate hook
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
      {/* Back Arrow with Icon */}
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </div>

      <div className="illustration"></div>

      <form onSubmit={handleSubmit} className="cancer-form">
        <h2>Enter Details</h2>
        <label>
          Clump Thickness:
          <input
            type="number"
            name="clumpThickness"
            value={formValues.clumpThickness}
            onChange={handleChange}
          />
        </label>
        <label>
          Uniform Cell Size:
          <input
            type="number"
            name="uniformCellSize"
            value={formValues.uniformCellSize}
            onChange={handleChange}
          />
        </label>
        <label>
          Uniform Cell Shape:
          <input
            type="text"
            name="uniformCellShape"
            value={formValues.uniformCellShape}
            onChange={handleChange}
          />
        </label>
        <label>
          Marginal Adhesion:
          <input
            type="text"
            name="marginalAdhesion"
            value={formValues.marginalAdhesion}
            onChange={handleChange}
          />
        </label>
        <label>
          Single Epithelial Cell Size:
          <input
            type="number"
            name="singleEpithelialCellSize"
            value={formValues.singleEpithelialCellSize}
            onChange={handleChange}
          />
        </label>
        <label>
          Bare Nuclei:
          <input
            type="text"
            name="bareNuclei"
            value={formValues.bareNuclei}
            onChange={handleChange}
          />
        </label>
        <label>
          Bland Chromatin:
          <input
            type="text"
            name="blandChromatin"
            value={formValues.blandChromatin}
            onChange={handleChange}
          />
        </label>
        <label>
          Normal Nucleoli:
          <input
            type="text"
            name="normalNucleoli"
            value={formValues.normalNucleoli}
            onChange={handleChange}
          />
        </label>
        <label>
          Mitoses:
          <input
            type="text"
            name="mitoses"
            value={formValues.mitoses}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="predict-button">
          Predict Cancer
        </button>
      </form>
    </div>
  );
};

export default Checkpage;
