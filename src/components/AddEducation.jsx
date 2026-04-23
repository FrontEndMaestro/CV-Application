import { useState } from "react";
import "../styles/addEducation.css";

export default function AddEducation({
  dataIndex,
  id,
  deleteEducation,
  addData,
  currentData,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [headingDisplay, setHeadingDisplay] = useState(
    currentData != "" ? currentData.school : "",
  );

  const [degreeName, setDegree] = useState(
    currentData != "" ? currentData.degree : "",
  );
  const [startDate, setStartDate] = useState(
    currentData != "" ? currentData.startDate : "",
  );
  const [endDate, setEndDate] = useState(
    currentData != "" ? currentData.endDate : "",
  );

  function displayDetails() {
    if (showDetails == false) setShowDetails(true);
    else setShowDetails(false);
  }

  function getAndSetData(inputType, value) {
    let school, degree, stDate, enDate;
    school = degree = stDate = enDate = "";
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (inputType == "school") {
      school = value;
      degree = degreeName;
      stDate = startDate;
      enDate = endDate;
      setHeadingDisplay(value);
    } else if (inputType == "degree") {
      degree = value;
      school = headingDisplay;
      stDate = startDate;
      enDate = endDate;
      setDegree(value);
    } else if (inputType == "st-date") {
      stDate = value;
      degree = degreeName;
      school = headingDisplay;
      enDate = endDate;
      setStartDate(value);
    } else if (inputType == "end-date") {
      enDate = value;
      stDate = startDate;
      degree = degreeName;
      school = headingDisplay;
      setEndDate(value);
    }
    let data = {
      id: id,
      school: school,
      degree: degree,
      startDate: stDate,
      endDate: enDate,
      date:
        enDate == ""
          ? stDate == ""
            ? ""
            : `${monthNames[new Date(stDate).getMonth()]} ${new Date(stDate).getFullYear()} - Present`
          : `${monthNames[new Date(stDate).getMonth()]} ${new Date(stDate).getFullYear()} - ${monthNames[new Date(enDate).getMonth()]} ${new Date(enDate).getFullYear()}`,
    };

    addData(dataIndex, data, id);
  }

  return (
    <div className="education-experience" id={dataIndex + "-container"}>
      <button className="expand" onClick={displayDetails}>
        <h2 id={dataIndex + "-heading"}>
          {headingDisplay == "" ? "Not specified" : headingDisplay}
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
      <button className="delete" onClick={() => deleteEducation(dataIndex)}>
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
        <div className="label-wrapper">
          <label for="school-name">
            School
            <input
              type="text"
              id="school-name"
              name="school"
              onChange={() => getAndSetData("school", event.target.value)}
              defaultValue={currentData.school}
            />
          </label>
          <label for="degree">
            Degree
            <input
              type="text"
              id="degree"
              name="degree"
              onChange={() => getAndSetData("degree", event.target.value)}
              defaultValue={currentData.degree}
            />
          </label>
        </div>

        <label for="st-date" className="st-date">
          Start & End Date
          <div className="label-wrapper">
            <input
              type="date"
              id="st-date"
              name="start-date"
              onChange={() => getAndSetData("st-date", event.target.value)}
              defaultValue={currentData.startDate}
            />
            <input
              type="date"
              id="end-date"
              name="end-date"
              onChange={() => getAndSetData("end-date", event.target.value)}
              defaultValue={currentData.endDate}
            />
          </div>
        </label>
      </div>
    </div>
  );
}
