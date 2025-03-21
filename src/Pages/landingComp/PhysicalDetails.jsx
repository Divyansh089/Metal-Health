// src/Pages/landingComp/PhysicalDetails.jsx
import React from "react";
import "../../styles/landingStyles/physicalDetails.css";

const PhysicalDetails = ({
  height,
  setHeight,
  weight,
  setWeight,
  bmi,
  activityOptions,
  activityLevel,
  setActivityLevel,
}) => {
  return (
    <div className="physical-container">
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          className="input-field"
          placeholder="Enter Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label>Weight (kg):</label>
        <input
          type="number"
          className="input-field"
          placeholder="Enter Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>BMI:</label>
        <input
          type="text"
          className="input-field bmi-field"
          placeholder="Your BMI"
          value={bmi}
          readOnly
        />
      </div>

      <div className="activity-group">
        <label className="activity-label">How active are you?</label>
        {activityOptions.map((option, index) => (
          <div key={index} className="radio-option">
            <input
              type="radio"
              id={`activity-${index}`}
              name="activity"
              value={option}
              checked={activityLevel === option}
              onChange={(e) => setActivityLevel(e.target.value)}
            />
            <label htmlFor={`activity-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicalDetails;
