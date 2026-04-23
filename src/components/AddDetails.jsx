import "../styles/addDetails.css";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import ProjectDetails from "./ProjectDetails";
export default function AddDetails({
  cvDetails,
  setPersonalDetails,
  setEducationData,
  setExperienceData,
  setProjectData,
  deleteData,
}) {
  const [selected, setSelected] = useState("personal");
  const [progress, setProgress] = useState("25");

  function backButtonClicked() {
    if (selected == "education") {
      setSelected("personal");
      setProgress("25");
    } else if (selected == "experience") {
      setSelected("education");
      setProgress("50");
    } else if (selected == "project") {
      setSelected("experience");
      setProgress("75");
    }
  }

  return (
    <>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="add-details-wrapper">
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
            deleteData={deleteData}
          ></EducationDetails>
        ) : null}
        {selected == "experience" ? (
          <ExperienceDetails
            cvDetails={cvDetails}
            setSelected={setSelected}
            setProgress={setProgress}
            setExperienceData={setExperienceData}
            deleteData={deleteData}
          ></ExperienceDetails>
        ) : null}

        {selected == "project" ? (
          <ProjectDetails
            cvDetails={cvDetails}
            setSelected={setSelected}
            setProgress={setProgress}
            setProjectData={setProjectData}
            deleteData={deleteData}
          ></ProjectDetails>
        ) : null}
        {selected != "personal" ? (
          <button className="back" onClick={backButtonClicked} title="back">
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
      </div>
    </>
  );
}
