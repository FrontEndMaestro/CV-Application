import Input from "./Input";
import "../styles/EducationDetails.css";
import AddEducation from "./AddEducation";
import { useState } from "react";
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

  function deleteEducationFromArr(index) {
    let elementKey = educationOptions[index].id;
    let newObj = educationOptions.filter((element) => element.id != elementKey);
    setEducationOptions(newObj);
  }
  return (
    <>
      <h1>Education</h1>
      <h2 className="education-subheading">Add all of your educational experience</h2>
      {educationOptions.map((element, index) => {
        return (
          <AddEducation
            key={element.id}
            dataIndex={index}
            deleteEducation={deleteEducationFromArr}
          ></AddEducation>
        );
      })}
      <button className="add-education" onClick={addEducationOption}>
        + Add one more education
      </button>
      <button className="next" type="submit">
        Next
      </button>
    </>
  );
}
