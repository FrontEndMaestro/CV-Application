import "../styles/addExperience.css";
import { useState } from "react";
import AddProject from "./AddProject";
export default function ProjectDetails({
  cvDetails,
  setSelected,
  setProgress,
  setProjectData,
  deleteData,
}) {
  const [projectOptions, setProjectOptions] = useState(
    cvDetails.projects.length != 0
      ? [...cvDetails.projects]
      : [
          {
            id: crypto.randomUUID(),
            name: "",
            description: "",
            skillsUsed: "",
          },
        ],
  );
  function addProjectOption() {
    let newObject = [
      ...projectOptions,
      {
        id: crypto.randomUUID(),
        name: "",
        description: "",
        skillsUsed: "",
      },
    ];
    setProjectOptions(newObject);
  }

  function addProjectData(index, newData, id) {
    let indexOfUpdatedObject = projectOptions.findIndex(
      (element) => element.id == id,
    );
    let ObjectToBeUpdated = {
      id: id,
      name: newData.name,

      description: newData.description,
      skillsUsed: newData.skillsUsed,
    };
    let newProjectOptionsObj = [...projectOptions];
    newProjectOptionsObj[indexOfUpdatedObject] = ObjectToBeUpdated;
    setProjectOptions(newProjectOptionsObj);
  }

  function deleteProject(id) {
    let newProjectArray = projectOptions.filter((element) => element.id != id);
    setProjectOptions(newProjectArray);
    deleteData(newProjectArray, "projects");
  }

  function submitProjectData() {
    projectOptions
      .filter(
        (element) =>
          element.name != "" ||
          element.description != "" ||
          element.skillsUsed != "",
      )
      .forEach((element) => {
        setProjectData(element);
      });
    setProgress("100");
  }

  return (
    <>
      <h1>Projects</h1>
      <h2 className="education-subheading">Showcase your projects</h2>
      {projectOptions.map((element, index) => {
        return (
          <AddProject
            key={element.id}
            dataIndex={index}
            deleteProject={deleteProject}
            addData={addProjectData}
            currentData={element}
            id={element.id}
          ></AddProject>
        );
      })}
      <button className="add-education" onClick={addProjectOption}>
        + Add more Experience
      </button>
      <button className="next" type="submit" onClick={submitProjectData}>
        Next
      </button>
    </>
  );
}
