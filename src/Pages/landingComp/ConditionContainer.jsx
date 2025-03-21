// src/Pages/landingComp/ConditionContainer.jsx
import React from "react";
import "../../styles/landingStyles/condition.css";

const ConditionContainer = ({
  options,
  selectedItems,
  handleSelect,
  removeItem,
  bp,
  setBp,
  sugar,
  setSugar,
}) => {
  return (
    <div className="condition-container">
      <label>Select Condition:</label>
      <select className="dropdown" onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          Select...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="selected-items">
        {selectedItems.map((item) => (
          <div key={item} className="selected-item">
            {item}
            <button className="remove-button" onClick={() => removeItem(item)}>
              ❌
            </button>
          </div>
        ))}
      </div>

      <div className="input-group">
        <label>Blood Pressure (BP):</label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter BP"
          value={bp}
          onChange={(e) => setBp(e.target.value)}
        />

        <label>Sugar Level:</label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter Sugar Level"
          value={sugar}
          onChange={(e) => setSugar(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ConditionContainer;
