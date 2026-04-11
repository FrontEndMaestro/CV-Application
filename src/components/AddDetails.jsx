import "../styles/addDetails.css";
import PersonalDetails from "./PersonalDetails";
export default function AddDetails() {
  function renderNextForm() {
    return (
      <div className="add-details-wrapper">
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <PersonalDetails></PersonalDetails>
        <button className="next" onClick={renderNextForm}>
          Next
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="add-details-wrapper">
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <PersonalDetails></PersonalDetails>
        <button className="next" onClick={renderNextForm}>
          Next
        </button>
      </div>
    </>
  );
}
