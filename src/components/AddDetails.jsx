import "../styles/addDetails.css";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
export default function AddDetails() {
  const [selected, setSelected] = useState("personal");

  return (
    <>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="add-details-wrapper">
        {selected == "personal" ? (
          <PersonalDetails setSelected={setSelected}></PersonalDetails>
        ) : null}

        {selected == "education" ? (
          <EducationDetails setSelected={setSelected}></EducationDetails>
        ) : null}
      </div>
    </>
  );
}
