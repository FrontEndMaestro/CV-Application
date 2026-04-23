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
    projects: [],
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

  function deleteData(newArray, type) {
    if (type == "education") {
      let newData = { ...cvDetails };
      newData.education = newArray;
      setCvDetails(newData);
    }
    if (type == "experience") {
      let newData = { ...cvDetails };
      newData.experiences = newArray;
      setCvDetails(newData);
    }
    if (type == "projects") {
      let newData = { ...cvDetails };
      newData.projects = newArray;
      setCvDetails(newData);
    }
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

  function setProjectData(projectData) {
    let index = cvDetails.projects.findIndex(
      (projectOption) => projectData.id == projectOption.id,
    );
    let newData = { ...cvDetails };
    if (index != -1) {
      newData.projects[index] = projectData;
    } else {
      newData.projects.push(projectData);
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
        setProjectData={setProjectData}
        deleteData={deleteData}
      ></AddDetails>
      <Display cvDetails={cvDetails}></Display>
    </>
  );
}

export default App;
