import "../styles/addExperience.css";
import { useState } from "react";
import AddExperience from "./AddExperience";
export default function ExperienceDetails({
  cvDetails,
  setSelected,
  setProgress,
  setExperienceData,
}) {
  const [experienceOptions, setExperienceOptions] = useState(
    cvDetails.experiences.length != 0
      ? [...cvDetails.experiences]
      : [
          {
            id: crypto.randomUUID(),
            job: "",
            company: "",
            date: "",
            description: "",
            endDate: "",
            startDate: "",
          },
        ],
  );
  function addExperienceOption() {
    let newObject = [
      ...experienceOptions,
      {
        id: crypto.randomUUID(),
        job: "",
        company: "",
        date: "",
        description: "",
        endDate: "",
        startDate: "",
      },
    ];
    setExperienceOptions(newObject);
  }

  function addExperienceData(index, newData, id) {
    let indexOfUpdatedObject = experienceOptions.findIndex(
      (element) => element.id == id,
    );
    let ObjectToBeUpdated = {
      id: id,
      job: newData.job,
      company: newData.company,
      description: newData.description,
      date: newData.date,
      startDate: newData.startDate,
      endDate: newData.endDate,
    };
    let newExperienceOptionsObj = [...experienceOptions];
    newExperienceOptionsObj[indexOfUpdatedObject] = ObjectToBeUpdated;
    setExperienceOptions(newExperienceOptionsObj);
  }

  function deleteExperience(index) {
    let elementKey = experienceOptions[index].id;
    let newObj = experienceOptions.filter(
      (element) => element.id != elementKey,
    );
    setExperienceOptions(newObj);
  }

  function submitExperienceData() {
    experienceOptions
      .filter(
        (element) =>
          element.job != "" ||
          element.startDate != "" ||
          element.endDate != "" ||
          element.company != "" ||
          element.description != "",
      )
      .forEach((element) => {
        setExperienceData(element);
      });
    setProgress("100");
    setSelected("project");
  }

  return (
    <>
      <h1>Professional Experience</h1>
      <h2 className="education-subheading">Show your relevant experiences</h2>
      {experienceOptions.map((element, index) => {
        return (
          <AddExperience
            key={element.id}
            dataIndex={index}
            deleteExperience={deleteExperience}
            addData={addExperienceData}
            currentData={element}
            id={element.id}
          ></AddExperience>
        );
      })}
      <button className="add-education" onClick={addExperienceOption}>
        + Add more Experience
      </button>
      <button className="next" type="submit" onClick={submitExperienceData}>
        Next
      </button>
    </>
  );
}
