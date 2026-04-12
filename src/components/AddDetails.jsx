import "../styles/addDetails.css";
import PersonalDetails from "./PersonalDetails";
export default function AddDetails() {
  return (
    <>
      <div className="add-details-wrapper">
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <PersonalDetails></PersonalDetails>
      </div>
    </>
  );
}
