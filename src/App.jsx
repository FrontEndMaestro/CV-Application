import { useState } from "react";

import "./App.css";
import Display from "./components/DisplayCV";
import AddDetails from "./components/AddDetails";
function App() {
  const [cvDetails, setCvDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    city: "",
    country: "",
    linkedin: "",
    github: "",
    education: [],
    experiences: [],
  });

  function setPersonalDetails(personalDetailsObj) {
    let newData = { ...cvDetails, ...personalDetailsObj };
    setCvDetails(newData);
  }

  function setEducationData(educationData) {
    let index = cvDetails.education.findIndex(
      (educationOption) => educationOption.id == educationData.id,
    );
    let newData = { ...cvDetails };
    if (index != -1) {
      newData.education[index] = educationData;
    } else {
      newData.education.push(educationData);
    }
    setCvDetails(newData);
  }

  function setExperienceData(experienceData) {
    let index = cvDetails.experiences.findIndex(
      (experienceOption) => experienceData.id == experienceOption.id,
    );
    let newData = { ...cvDetails };
    if (index != -1) {
      newData.experiences[index] = experienceData;
    } else {
      newData.experiences.push(experienceData);
    }
    setCvDetails(newData);

  }

  return (
    <>
      <AddDetails
        cvDetails={cvDetails}
        setPersonalDetails={setPersonalDetails}
        setEducationData={setEducationData}
        setExperienceData={setExperienceData}
      ></AddDetails>
      <Display cvDetails={cvDetails}></Display>
    </>
  );
}

export default App;
