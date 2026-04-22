import "../styles/addDetails.css";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import AddExperience from "./ExperienceDetails";
export default function AddDetails({
  cvDetails,
  setPersonalDetails,
  setEducationData,
  setExperienceData,
}) {
  const [selected, setSelected] = useState("personal");
  const [progress, setProgress] = useState("25");

  function backButtonClicked() {
    selected == "education" ? setSelected("personal") : null;
    selected == "experience" ? setSelected("education") : null;
    selected == "complete" ? setSelected("experience") : null;
  }

  return (
    <>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="add-details-wrapper">
        {selected != "personal" ? (
          <button className="back" onClick={backButtonClicked}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 15 24"
            >
              <path
                fill="currentColor"
                d="m2.82 12l7.715 7.716q.22.22.218.528t-.224.529t-.529.221t-.529-.221L1.83 13.137q-.242-.243-.354-.54q-.111-.299-.111-.597t.111-.596q.112-.298.354-.54L9.47 3.22q.221-.221.532-.218q.31.003.532.224q.22.221.22.529t-.22.529z"
              />
            </svg>
          </button>
        ) : null}

        {selected == "personal" ? (
          <PersonalDetails
            cvDetails={cvDetails}
            setSelected={setSelected}
            setProgress={setProgress}
            setPersonalDetails={setPersonalDetails}
          ></PersonalDetails>
        ) : null}

        {selected == "education" ? (
          <EducationDetails
            cvDetails={cvDetails}
            setSelected={setSelected}
            setProgress={setProgress}
            setEducationData={setEducationData}
          ></EducationDetails>
        ) : null}
        {selected == "experience" ? (
          <AddExperience
            cvDetails={cvDetails}
            setSelected={setSelected}
            setProgress={setProgress}
            setExperienceData={setExperienceData}
          ></AddExperience>
        ) : null}
      </div>
    </>
  );
}
