import "../styles/addEducation.css";

export default function AddEducation({ dataIndex, deleteEducation }) {
  function displayDetails() {
    let detailsDisplay = document.getElementById(`${dataIndex}div`);
    let svg = document.getElementById(`${dataIndex}-svg`);
    svg.classList.contains("rotate-svg")
      ? svg.classList.remove("rotate-svg")
      : svg.classList.add("rotate-svg");
    detailsDisplay.style.display == "none"
      ? (detailsDisplay.style.display = "block")
      : (detailsDisplay.style.display = "none");
  }

  function changeHeading(event) {
    let heading = document.getElementById(`${dataIndex}-heading`);
    heading.textContent = event.target.value;
    if (heading.textContent == "") {
      heading.textContent = "(Not specified)";
    }
  }

  return (
    <div className="education-experience" id={dataIndex}>
      <button className="expand" onClick={displayDetails}>
        <h2 id={dataIndex + "-heading"}>(Not specified)</h2>

        <svg
          id={dataIndex + "-svg"}
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
        className="details-display"
        style={{ display: "none" }}
        id={dataIndex + "div"}
      >
        <div className="label-wrapper">
          <label for="school-name">
            School
            <input
              type="text"
              id="school-name"
              name="school"
              onChange={changeHeading}
            />
          </label>
          <label for="degree">
            Degree
            <input type="text" id="degree" name="degree" />
          </label>
        </div>

        <label for="st-date" className="st-date">
          Start & End Date
          <div className="label-wrapper">
            <input type="date" id="st-date" name="start-date" />
            <input type="date" id="end-date" name="end-date" />
          </div>
        </label>
      </div>
    </div>
  );
}
