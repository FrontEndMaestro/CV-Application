import Input from "./Input";
import "../styles/EducationDetails.css";
import AddEducation from "./AddEducation";
import { useState } from "react";
import { setEducationData } from "./Data";
export default function EducationDetails({ setSelected }) {
  const [educationOptions, setEducationOptions] = useState([
    {
      id: crypto.randomUUID(),
    },
  ]);
  function addEducationOption() {
    let newObject = [...educationOptions, { id: crypto.randomUUID() }];
    setEducationOptions(newObject);
  }

  function addEducationData(index, newData) {
    let ObjectToBeUpdated = { ...educationOptions[index] };
    ObjectToBeUpdated.data = newData;
    let newEducationOptionsObj = [...educationOptions];
    newEducationOptionsObj[index] = ObjectToBeUpdated;
    setEducationOptions(newEducationOptionsObj);
  }

  function deleteEducationFromArr(index) {
    let elementKey = educationOptions[index].id;
    let newObj = educationOptions.filter((element) => element.id != elementKey);
    setEducationOptions(newObj);
  }

  function submitEducationData() {
    educationOptions
      .filter((element) => element.data !== undefined)
      .forEach((element) => {
        setEducationData(element.data);
      });

    setSelected("experience");
  }

  return (
    <>
      <h1>Education</h1>
      <h2 className="education-subheading">
        Add all of your educational experience
      </h2>
      {educationOptions.map((element, index) => {
        return (
          <AddEducation
            key={element.id}
            dataIndex={index}
            deleteEducation={deleteEducationFromArr}
            addData={addEducationData}
          ></AddEducation>
        );
      })}
      <button className="add-education" onClick={addEducationOption}>
        + Add one more education
      </button>
      <button className="next" type="submit" onClick={submitEducationData}>
        Next
      </button>
    </>
  );
}
