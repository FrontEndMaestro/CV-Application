import { useState } from "react";
import "../styles/addExperience.css";
import Input from "./Input";
export default function AddExperience({
  dataIndex,
  deleteExperience,
  addData,
  currentData,
  id,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [jobTitle, setJobTitle] = useState(
    currentData != "" ? currentData.job : "",
  );
  const [companyName, setCompanyName] = useState(
    currentData != "" ? currentData.company : "",
  );
  const [description, setDescription] = useState(
    currentData != "" ? currentData.description : "",
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
    let job, company, stDate, enDate, descriptionCopy;
    job = company = stDate = enDate = descriptionCopy = "";
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
    if (inputType == "jobTitle") {
      job = value;
      company = companyName;
      stDate = startDate;
      enDate = endDate;
      descriptionCopy = description;
      setJobTitle(event.target.value);
    } else if (inputType == "company") {
      company = value;
      job = jobTitle;
      stDate = startDate;
      enDate = endDate;
      descriptionCopy = description;
      setCompanyName(value);
    } else if (inputType == "st-date") {
      stDate = value;
      company = companyName;
      job = jobTitle;
      enDate = endDate;
      descriptionCopy = description;
      setStartDate(value);
    } else if (inputType == "end-date") {
      enDate = value;
      stDate = startDate;
      company = companyName;
      job = jobTitle;
      descriptionCopy = description;
      setEndDate(value);
    } else if (inputType == "description") {
      descriptionCopy = value;
      job = jobTitle;
      company = companyName;
      stDate = startDate;
      enDate = endDate;
      setDescription(value);
    }
    let data = {
      job: job,
      company: company,
      date:
        enDate == ""
          ? stDate == ""
            ? ""
            : `${monthNames[new Date(stDate).getMonth()]} ${new Date(stDate).getFullYear()} - Present`
          : `${monthNames[new Date(stDate).getMonth()]} ${new Date(stDate).getFullYear()} - ${monthNames[new Date(enDate).getMonth()]} ${new Date(enDate).getFullYear()}`,
      description:
        descriptionCopy == "• " || descriptionCopy == "•"
          ? ""
          : descriptionCopy,
      endDate: enDate,
      startDate: stDate,
    };

    addData(dataIndex, data, id);
  }

  return (
    <div className="education-experience" id={dataIndex + "-container"}>
      <button className="expand" onClick={displayDetails}>
        <h2 id={dataIndex + "-heading"}>
          {jobTitle == "" ? "Not specified" : jobTitle}
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
      <button className="delete" onClick={() => deleteExperience(dataIndex)}>
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
      {showDetails && (
        <div className="details-display" id={dataIndex + "div"}>
          <div className="label-wrapper">
            <label for="job-title">
              Job Title
              <input
                type="text"
                id="job-title"
                name="job-title"
                onChange={() => getAndSetData("jobTitle", event.target.value)}
                defaultValue={jobTitle}
              />
            </label>
            <label for="company">
              Company Name
              <input
                type="text"
                id="company"
                name="company"
                onChange={() => getAndSetData("company", event.target.value)}
                defaultValue={companyName}
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
                defaultValue={startDate}
              />
              <input
                type="date"
                id="end-date"
                name="end-date"
                onChange={() => getAndSetData("end-date", event.target.value)}
                defaultValue={endDate}
              />
            </div>
          </label>

          <label for="responsibilities">
            <textarea
              name="responsibilities"
              id="responsibilities"
              rows="5"
              onKeyUp={() => {
                if (event.keyCode == 13) {
                  return (event.target.value += "• ");
                }
                if (event.target.value == "")
                  return (event.target.value += "• ");
              }}
              onFocus={() => {
                if (event.target.value == "")
                  return (event.target.value = "• ");
              }}
              onBlur={() => {
                if (event.target.value == "• " || event.target.value == "•")
                  return (event.target.value = "");
              }}
              placeholder="e.g., Managed a team of 5 and increased Q3 sales by 15%..."
              onChange={() => getAndSetData("description", event.target.value)}
              defaultValue={description}
            ></textarea>
          </label>
        </div>
      )}
    </div>
  );
}
