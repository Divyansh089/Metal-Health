// src/Pages/landingComp/ReportContainer.jsx
import React from "react";
import "../../styles/landingStyles/report.css";

const ReportContainer = ({
  ongoingTreatment,
  setOngoingTreatment,
  therapistSession,
  setTherapistSession,
  bodyCheckup,
  setBodyCheckup,
  setTreatmentFile,
  setCheckupFile,
}) => {
  return (
    <div className="report-container">
      <div className="question-group">
        <label>Is there any ongoing treatment?</label>
        <div>
          <input
            type="radio"
            id="treatment-yes"
            name="treatment"
            value="yes"
            checked={ongoingTreatment === "yes"}
            onChange={() => setOngoingTreatment("yes")}
          />
          <label htmlFor="treatment-yes">Yes</label>
          <input
            type="radio"
            id="treatment-no"
            name="treatment"
            value="no"
            checked={ongoingTreatment === "no"}
            onChange={() => setOngoingTreatment("no")}
          />
          <label htmlFor="treatment-no">No</label>
        </div>
        {ongoingTreatment === "yes" && (
          <input
            type="file"
            className="file-upload"
            onChange={(e) => setTreatmentFile(e.target.files[0])}
          />
        )}
      </div>

      <div className="question-group">
        <label>Have you taken any therapist session?</label>
        <div>
          <input
            type="radio"
            id="therapist-yes"
            name="therapist"
            value="yes"
            checked={therapistSession === "yes"}
            onChange={() => setTherapistSession("yes")}
          />
          <label htmlFor="therapist-yes">Yes</label>
          <input
            type="radio"
            id="therapist-no"
            name="therapist"
            value="no"
            checked={therapistSession === "no"}
            onChange={() => setTherapistSession("no")}
          />
          <label htmlFor="therapist-no">No</label>
        </div>
      </div>

      <div className="question-group">
        <label>Have you done a full body checkup?</label>
        <div>
          <input
            type="radio"
            id="checkup-yes"
            name="checkup"
            value="yes"
            checked={bodyCheckup === "yes"}
            onChange={() => setBodyCheckup("yes")}
          />
          <label htmlFor="checkup-yes">Yes</label>
          <input
            type="radio"
            id="checkup-no"
            name="checkup"
            value="no"
            checked={bodyCheckup === "no"}
            onChange={() => setBodyCheckup("no")}
          />
          <label htmlFor="checkup-no">No</label>
        </div>
        {bodyCheckup === "yes" && (
          <input
            type="file"
            className="file-upload"
            onChange={(e) => setCheckupFile(e.target.files[0])}
          />
        )}
      </div>
    </div>
  );
};

export default ReportContainer;
