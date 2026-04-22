import Input from "./Input";
import "../styles/EducationDetails.css";
import AddEducation from "./AddEducation";
import { useState } from "react";

//the issue is of key after every re render keys are being updated which leads to it forgetting options and their data
export default function EducationDetails({
  cvDetails,
  setSelected,
  setProgress,
  setEducationData,
}) {
  const [educationOptions, setEducationOptions] = useState(
    cvDetails.education.length != 0
      ? [...cvDetails.education]
      : [
          {
            id: crypto.randomUUID(),
            date: "",
            degree: "",
            school: "",
            endDate: "",
            startDate: "",
          },
        ],
  );

  function addEducationOption() {
    let newObject = [
      ...educationOptions,
      {
        id: crypto.randomUUID(),
        date: "",
        degree: "",
        school: "",
        endDate: "",
        startDate: "",
      },
    ];
    setEducationOptions(newObject);
  }

  function addEducationData(index, newData, id) {
    let indexOfUpdatedObject = educationOptions.findIndex(
      (element) => element.id == id,
    );
    let ObjectToBeUpdated = {
      id: id,
      school: newData.school,
      degree: newData.degree,
      date: newData.date,
      startDate: newData.startDate,
      endDate: newData.endDate,
    };
    let newEducationOptionsObj = [...educationOptions];
    newEducationOptionsObj[indexOfUpdatedObject] = ObjectToBeUpdated;
    setEducationOptions(newEducationOptionsObj);
  }

  function deleteEducationFromArr(index) {
    let elementKey = educationOptions[index].id;
    let newObj = educationOptions.filter((element) => element.id != elementKey);
    setEducationOptions(newObj);
  }

  function submitEducationData() {
    educationOptions
      .filter(
        (element) =>
          element.school != "" ||
          element.startDate != "" ||
          element.endDate != "" ||
          element.degree != "",
      )
      .forEach((element) => {
        setEducationData(element);
      });

    setSelected("experience");
    setProgress("75");
  }

  return (
    <>
      <h1>Education</h1>
      <h2 className="education-subheading">
        Add all of your educational experience
      </h2>
      {educationOptions.map((element, index) => (
        <AddEducation
          key={element.id}
          dataIndex={index}
          id={element.id}
          deleteEducation={deleteEducationFromArr}
          addData={addEducationData}
          currentData={element}
        ></AddEducation>
      ))}

      <button className="add-education" onClick={addEducationOption}>
        + Add one more education
      </button>
      <button className="next" type="submit" onClick={submitEducationData}>
        Next
      </button>
    </>
  );
}
