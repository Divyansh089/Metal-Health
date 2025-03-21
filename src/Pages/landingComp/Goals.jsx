// src/Pages/landingComp/Goals.jsx
import React from "react";
import "../../styles/landingStyles/goals.css";

const Goals = ({
  mentalGoals,
  setMentalGoals,
  supportType,
  setSupportType,
  therapyMethods,
  setTherapyMethods,
  privacyPreference,
  setPrivacyPreference,
}) => {
  // Options for Preferred Type of Support
  const supportOptions = ["AI Chatbot", "Therapist", "Self-Help Tools"];

  // Options for Preferred Therapy Methods
  const therapyOptions = ["CBT", "Mindfulness", "Journaling", "Medication"];

  // Options for Privacy & Data-Sharing Preferences
  const privacyOptions = ["Share All", "Share Limited", "Do Not Share"];

  // Handler for checkbox changes in therapy methods
  const handleTherapyMethodChange = (option) => {
    if (therapyMethods.includes(option)) {
      // Remove the option if already selected
      setTherapyMethods(therapyMethods.filter((method) => method !== option));
    } else {
      // Add the option to the array
      setTherapyMethods([...therapyMethods, option]);
    }
  };

  return (
    <div className="goals-container">
      <h2>Goals & Preferences</h2>
      
      <div className="input-group">
        <label>Personal Mental Health Goals</label>
        <textarea
          className="input-field"
          placeholder="E.g., reduce anxiety, improve mood"
          value={mentalGoals}
          onChange={(e) => setMentalGoals(e.target.value)}
          rows="3"
        />
      </div>
      
      <div className="input-group">
        <label>Preferred Type of Support</label>
        <div className="radio-group">
          {supportOptions.map((option, index) => (
            <div key={index} className="radio-option">
              <input
                type="radio"
                id={`support-${index}`}
                name="supportType"
                value={option}
                checked={supportType === option}
                onChange={(e) => setSupportType(e.target.value)}
              />
              <label htmlFor={`support-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="input-group">
        <label>Preferred Therapy Methods</label>
        <div className="checkbox-group">
          {therapyOptions.map((option, index) => (
            <div key={index} className="checkbox-option">
              <input
                type="checkbox"
                id={`therapy-${index}`}
                value={option}
                checked={therapyMethods.includes(option)}
                onChange={() => handleTherapyMethodChange(option)}
              />
              <label htmlFor={`therapy-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="input-group">
        <label>Privacy & Data-Sharing Preferences</label>
        <div className="radio-group">
          {privacyOptions.map((option, index) => (
            <div key={index} className="radio-option">
              <input
                type="radio"
                id={`privacy-${index}`}
                name="privacyPreference"
                value={option}
                checked={privacyPreference === option}
                onChange={(e) => setPrivacyPreference(e.target.value)}
              />
              <label htmlFor={`privacy-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
