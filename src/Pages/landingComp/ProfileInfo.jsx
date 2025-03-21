// src/Pages/landingComp/ProfileInfo.jsx
import React from "react";
import "../../styles/landingStyles/profileInfo.css";

const ProfileInfo = ({
  name,
  setName,
  age,
  setAge,
  gender,
  setGender,
  contact,
  setContact,
  emergencyContact,
  setEmergencyContact,
}) => {
  return (
    <div className="profile-info-container">
      <h2>Basic Information</h2>

      <div className="input-group">
        <label>Full Name (or Anonymous ID)</label>
        <input
          type="text"
          placeholder="Enter your name or an ID"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      <div className="input-group">
        <label>Contact Information (Optional)</label>
        <input
          type="text"
          placeholder="Email or phone number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Emergency Contact</label>
        <input
          type="text"
          placeholder="Name & phone number"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
