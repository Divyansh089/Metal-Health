// src/Pages/landingComp/HealthHistory.jsx
import React from 'react';
import "../../styles/landingStyles/healthHistory.css";

const HealthHistory = ({
  mentalDiagnoses,
  setMentalDiagnoses,
  currentMentalStatus,
  setCurrentMentalStatus,
  therapyExperience,
  setTherapyExperience,
  currentMedications,
  setCurrentMedications,
  hospitalizationHistory,
  setHospitalizationHistory,
  medicalConditions,
  setMedicalConditions,
  sleepPatterns,
  setSleepPatterns,
  dietHabits,
  setDietHabits,
  exercise,
  setExercise,
  substanceUse,
  setSubstanceUse,
}) => {
  return (
    <div className="health-history-container">
      <h2>Mental Health History</h2>
      
      <div className="input-group">
        <label>Prior Mental Health Diagnoses</label>
        <input
          type="text"
          placeholder="List any diagnoses (e.g., depression, anxiety)"
          value={mentalDiagnoses}
          onChange={(e) => setMentalDiagnoses(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Current Mental Health Status</label>
        <input
          type="text"
          placeholder="Describe your current mental state"
          value={currentMentalStatus}
          onChange={(e) => setCurrentMentalStatus(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Previous Therapy or Counseling Experiences</label>
        <input
          type="text"
          placeholder="Briefly describe past experiences"
          value={therapyExperience}
          onChange={(e) => setTherapyExperience(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Current Medications</label>
        <input
          type="text"
          placeholder="List any current medications"
          value={currentMedications}
          onChange={(e) => setCurrentMedications(e.target.value)}
        />
      </div>

      <div className="input-group radio-group">
        <label>History of Hospitalization for Mental Health</label>
        <div>
          <input
            type="radio"
            id="hospitalization-yes"
            name="hospitalization"
            value="yes"
            checked={hospitalizationHistory === "yes"}
            onChange={() => setHospitalizationHistory("yes")}
          />
          <label htmlFor="hospitalization-yes">Yes</label>
          <input
            type="radio"
            id="hospitalization-no"
            name="hospitalization"
            value="no"
            checked={hospitalizationHistory === "no"}
            onChange={() => setHospitalizationHistory("no")}
          />
          <label htmlFor="hospitalization-no">No</label>
        </div>
      </div>

      <h2>Physical Health & Lifestyle</h2>

      <div className="input-group">
        <label>Medical Conditions</label>
        <input
          type="text"
          placeholder="List any medical conditions (e.g., diabetes, heart disease)"
          value={medicalConditions}
          onChange={(e) => setMedicalConditions(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Sleep Patterns</label>
        <input
          type="text"
          placeholder="Describe your sleep patterns"
          value={sleepPatterns}
          onChange={(e) => setSleepPatterns(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Diet & Nutrition Habits</label>
        <input
          type="text"
          placeholder="Describe your diet habits"
          value={dietHabits}
          onChange={(e) => setDietHabits(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Exercise Frequency & Type</label>
        <input
          type="text"
          placeholder="How often and what type of exercise do you do?"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Substance Use</label>
        <input
          type="text"
          placeholder="Specify alcohol, drugs, or smoking details"
          value={substanceUse}
          onChange={(e) => setSubstanceUse(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HealthHistory;
