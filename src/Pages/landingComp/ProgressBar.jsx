// src/Pages/landingComp/ProgressBar.jsx
import React from "react";
import "../../styles/landingStyles/progressBar.css";

const ProgressBar = ({ currentStep }) => {
  // Define your 5 steps here
  const steps = [
    { id: 1, label: "Profile" },
    { id: 2, label: "History" },
    { id: 3, label: "Well-being" },
    { id: 4, label: "Routine" },
    { id: 5, label: "Goals" },
  ];

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={step.id} className="progress-step">
            <div
              className={`progress-circle ${
                step.id <= currentStep ? "completed" : ""
              }`}
            >
              {step.id < currentStep ? (
                <span className="tick-mark">&#10004;</span>
              ) : (
                step.id
              )}
            </div>
            {/* Only render the line if it's not the last step */}
            {index !== steps.length - 1 && (
              <div
                className={`progress-line ${
                  step.id < currentStep ? "completed" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
