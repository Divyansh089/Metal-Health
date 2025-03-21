// src/Pages/LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import your five container components
import ProfileInfo from "./landingComp/ProfileInfo";
import HealthHistory from "./landingComp/HealthHistory";
import WellBeing from "./landingComp/WellBeing";
import DailyRoutine from "./landingComp/DailyRoutine";
import Goals from "./landingComp/Goals";

import "../styles/landing.css";

const LandingPage = () => {
  const navigate = useNavigate();

  // Track the current step (1 to 5)
  const [step, setStep] = useState(1);

  /* -------------------------
     Container 1: ProfileInfo
     ------------------------- */
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  /* -------------------------
     Container 2: HealthHistory
     ------------------------- */
  const [mentalDiagnoses, setMentalDiagnoses] = useState("");
  const [currentMentalStatus, setCurrentMentalStatus] = useState("");
  const [therapyExperience, setTherapyExperience] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [hospitalizationHistory, setHospitalizationHistory] = useState("no");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [sleepPatterns, setSleepPatterns] = useState("");
  const [dietHabits, setDietHabits] = useState("");
  const [exercise, setExercise] = useState("");
  const [substanceUse, setSubstanceUse] = useState("");

  /* -------------------------
     Container 3: WellBeing
     ------------------------- */
  const [moodPatterns, setMoodPatterns] = useState("");
  const [stressors, setStressors] = useState("");
  const [copingMechanisms, setCopingMechanisms] = useState("");
  const [selfHarm, setSelfHarm] = useState("no");
  const [emotionalTriggers, setEmotionalTriggers] = useState("");
  const [socialSupport, setSocialSupport] = useState("");

  /* -------------------------
     Container 4: DailyRoutine
     ------------------------- */
  const [behavioralPatterns, setBehavioralPatterns] = useState("");
  const [workPerformance, setWorkPerformance] = useState("");
  const [habitualBehaviors, setHabitualBehaviors] = useState("");
  const [dailySchedule, setDailySchedule] = useState("");
  const [mentalStateTriggers, setMentalStateTriggers] = useState("");
  const [interests, setInterests] = useState("");

  /* -------------------------
     Container 5: Goals
     ------------------------- */
  const [mentalGoals, setMentalGoals] = useState("");
  const [supportType, setSupportType] = useState("");
  const [therapyMethods, setTherapyMethods] = useState([]);
  const [privacyPreference, setPrivacyPreference] = useState("");

  // Handler for going to the next step
  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // If on step 5, treat as "Submit" and redirect
      navigate("/app/home");
    }
  };

  // Handler for going to the previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // 5-step progress bar
  const ProgressBar = () => {
    const steps = [
      { id: 1, label: "Profile" },
      { id: 2, label: "History" },
      { id: 3, label: "Well-being" },
      { id: 4, label: "Routine" },
      { id: 5, label: "Goals" },
    ];

    return (
      <div className="progress-bar-container">
        <div className="progress-bar">
          {steps.map((item, index) => (
            <div key={item.id} className="progress-step">
              <div
                className={`progress-circle ${
                  item.id <= step ? "completed" : ""
                }`}
              >
                {item.id < step ? "✓" : item.id}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`progress-line ${
                    item.id < step ? "completed" : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="landing-page-container">
      {/* Progress Bar at the top */}
      <ProgressBar />

      {/* White container that adapts to the content size */}
      <div className="landing-form-container">
        {/* Step 1: ProfileInfo */}
        {step === 1 && (
          <ProfileInfo
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            gender={gender}
            setGender={setGender}
            contact={contact}
            setContact={setContact}
            emergencyContact={emergencyContact}
            setEmergencyContact={setEmergencyContact}
          />
        )}

        {/* Step 2: HealthHistory */}
        {step === 2 && (
          <HealthHistory
            mentalDiagnoses={mentalDiagnoses}
            setMentalDiagnoses={setMentalDiagnoses}
            currentMentalStatus={currentMentalStatus}
            setCurrentMentalStatus={setCurrentMentalStatus}
            therapyExperience={therapyExperience}
            setTherapyExperience={setTherapyExperience}
            currentMedications={currentMedications}
            setCurrentMedications={setCurrentMedications}
            hospitalizationHistory={hospitalizationHistory}
            setHospitalizationHistory={setHospitalizationHistory}
            medicalConditions={medicalConditions}
            setMedicalConditions={setMedicalConditions}
            sleepPatterns={sleepPatterns}
            setSleepPatterns={setSleepPatterns}
            dietHabits={dietHabits}
            setDietHabits={setDietHabits}
            exercise={exercise}
            setExercise={setExercise}
            substanceUse={substanceUse}
            setSubstanceUse={setSubstanceUse}
          />
        )}

        {/* Step 3: WellBeing */}
        {step === 3 && (
          <WellBeing
            moodPatterns={moodPatterns}
            setMoodPatterns={setMoodPatterns}
            stressors={stressors}
            setStressors={setStressors}
            copingMechanisms={copingMechanisms}
            setCopingMechanisms={setCopingMechanisms}
            selfHarm={selfHarm}
            setSelfHarm={setSelfHarm}
            emotionalTriggers={emotionalTriggers}
            setEmotionalTriggers={setEmotionalTriggers}
            socialSupport={socialSupport}
            setSocialSupport={setSocialSupport}
          />
        )}

        {/* Step 4: DailyRoutine */}
        {step === 4 && (
          <DailyRoutine
            behavioralPatterns={behavioralPatterns}
            setBehavioralPatterns={setBehavioralPatterns}
            workPerformance={workPerformance}
            setWorkPerformance={setWorkPerformance}
            habitualBehaviors={habitualBehaviors}
            setHabitualBehaviors={setHabitualBehaviors}
            dailySchedule={dailySchedule}
            setDailySchedule={setDailySchedule}
            mentalStateTriggers={mentalStateTriggers}
            setMentalStateTriggers={setMentalStateTriggers}
            interests={interests}
            setInterests={setInterests}
          />
        )}

        {/* Step 5: Goals */}
        {step === 5 && (
          <Goals
            mentalGoals={mentalGoals}
            setMentalGoals={setMentalGoals}
            supportType={supportType}
            setSupportType={setSupportType}
            therapyMethods={therapyMethods}
            setTherapyMethods={setTherapyMethods}
            privacyPreference={privacyPreference}
            setPrivacyPreference={setPrivacyPreference}
          />
        )}
      </div>

      {/* Previous/Next or Submit buttons */}
      <div className="landing-button-group">
        <button
          className="landing-prev-button"
          onClick={prevStep}
          disabled={step === 1}
        >
          Previous
        </button>
        <button className="landing-next-button" onClick={nextStep}>
          {step < 5 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
