// src/Pages/landingComp/DailyRoutine.jsx
import React from "react";
import "../../styles/landingStyles/dailyRoutine.css";

const DailyRoutine = ({
  behavioralPatterns,
  setBehavioralPatterns,
  workPerformance,
  setWorkPerformance,
  habitualBehaviors,
  setHabitualBehaviors,
  dailySchedule,
  setDailySchedule,
  mentalStateTriggers,
  setMentalStateTriggers,
  interests,
  setInterests,
}) => {
  return (
    <div className="daily-routine-container">
      <h2>Behavior & Daily Routine</h2>
      
      <div className="input-group">
        <label>Behavioral Patterns</label>
        <textarea
          className="input-field"
          placeholder="Describe your social interactions, introversion/extroversion, avoidance, isolation, etc."
          value={behavioralPatterns}
          onChange={(e) => setBehavioralPatterns(e.target.value)}
          rows="2"
        />
      </div>

      <div className="input-group">
        <label>Work/School Performance</label>
        <textarea
          className="input-field"
          placeholder="Describe how your mental health impacts your work or school performance"
          value={workPerformance}
          onChange={(e) => setWorkPerformance(e.target.value)}
          rows="2"
        />
      </div>

      <div className="input-group">
        <label>Habitual Behaviors</label>
        <textarea
          className="input-field"
          placeholder="Describe habitual behaviors (e.g., nail-biting, excessive screen time, etc.)"
          value={habitualBehaviors}
          onChange={(e) => setHabitualBehaviors(e.target.value)}
          rows="2"
        />
      </div>

      <div className="input-group">
        <label>Typical Daily Schedule</label>
        <textarea
          className="input-field"
          placeholder="Describe your daily schedule (morning, work/school, evening, etc.)"
          value={dailySchedule}
          onChange={(e) => setDailySchedule(e.target.value)}
          rows="3"
        />
      </div>

      <div className="input-group">
        <label>Situations That Worsen/Improve Mental State</label>
        <textarea
          className="input-field"
          placeholder="Describe situations or triggers that affect your mental state"
          value={mentalStateTriggers}
          onChange={(e) => setMentalStateTriggers(e.target.value)}
          rows="3"
        />
      </div>

      <div className="input-group">
        <label>Interests &amp; Hobbies</label>
        <textarea
          className="input-field"
          placeholder="List your interests and hobbies"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          rows="2"
        />
      </div>
    </div>
  );
};

export default DailyRoutine;
