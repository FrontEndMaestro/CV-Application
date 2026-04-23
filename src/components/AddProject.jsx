import { useState } from "react";
import Input from "./Input";
import "../styles/addProject.css";

export default function AddProject({
  dataIndex,
  deleteProject,
  addData,
  currentData,
  id,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState(currentData != "" ? currentData.name : "");
  const [description, setDescription] = useState(
    currentData != "" ? currentData.description : "",
  );
  const [skillsUsed, setSkillsUsed] = useState(
    currentData != "" ? currentData.skillsUsed : "",
  );

  function displayDetails() {
    if (showDetails == false) setShowDetails(true);
    else setShowDetails(false);
  }

  function getAndSetData(inputType, value) {
    let nameCopy, descriptionCopy, skillsUsedCopy;
    (nameCopy, descriptionCopy, (skillsUsedCopy = ""));

    if (inputType == "name") {
      nameCopy = value;
      descriptionCopy = description;
      skillsUsedCopy = skillsUsed;
      setName(event.target.value);
    } else if (inputType == "description") {
      nameCopy = name;
      descriptionCopy = value;
      skillsUsedCopy = skillsUsed;
      setDescription(value);
    } else if (inputType == "skills") {
      nameCopy = name;
      descriptionCopy = description;
      skillsUsedCopy = value;
      setSkillsUsed(skillsUsedCopy);
    }
    let data = {
      name: nameCopy,
      skillsUsed: skillsUsedCopy,
      description:
        descriptionCopy == "• " || descriptionCopy == "•"
          ? ""
          : descriptionCopy,
    };

    addData(dataIndex, data, id);
  }

  return (
    <div className="education-experience" id={dataIndex + "-container"}>
      <button className="expand" onClick={displayDetails}>
        <h2 id={dataIndex + "-heading"}>
          {name == "" ? "Not specified" : name}
        </h2>

        <svg
          className={showDetails ? "rotate-svg" : null}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 14.373q-.161 0-.298-.053t-.267-.184L7.046 9.749q-.14-.14-.15-.344t.15-.363t.354-.16t.354.16L12 13.287l4.246-4.246q.14-.141.345-.15q.203-.01.363.15q.16.159.16.353t-.16.354l-4.389 4.389q-.13.13-.267.183q-.136.053-.298.053"
          />
        </svg>
      </button>
      <button className="delete" onClick={() => deleteProject(dataIndex)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
          />
        </svg>
      </button>

      <div
        className={`details-display ${showDetails ? "open" : ""}`}
        id={dataIndex + "div"}
      >
        <label for="name">
          Project Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={() => getAndSetData("name", event.target.value)}
            defaultValue={name}
          />
        </label>
        <label for="skills">
          Skills Used in this Project
          <textarea
            name="skills"
            id="skills"
            rows="3"
            onKeyUp={() => {
              if (event.keyCode == 13) {
                return (event.target.value += "• ");
              }
              if (event.target.value == "") return (event.target.value += "• ");
            }}
            onFocus={() => {
              if (event.target.value == "") return (event.target.value = "• ");
            }}
            onBlur={() => {
              if (event.target.value == "• " || event.target.value == "•")
                return (event.target.value = "");
            }}
            onChange={() => getAndSetData("skills", event.target.value)}
            defaultValue={skillsUsed}
          ></textarea>
        </label>

        <label for="description">
          <textarea
            name="description"
            id="description"
            rows="5"
            onKeyUp={() => {
              if (event.keyCode == 13) {
                return (event.target.value += "• ");
              }
              if (event.target.value == "") return (event.target.value += "• ");
            }}
            onFocus={() => {
              if (event.target.value == "") return (event.target.value = "• ");
            }}
            onBlur={() => {
              if (event.target.value == "• " || event.target.value == "•")
                return (event.target.value = "");
            }}
            placeholder="Describe your implementation details here..."
            onChange={() => getAndSetData("description", event.target.value)}
            defaultValue={description}
          ></textarea>
        </label>
      </div>
    </div>
  );
}
