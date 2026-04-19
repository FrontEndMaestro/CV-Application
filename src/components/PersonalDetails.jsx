import "../styles/personalDetails.css";
import Input from "./Input";
export default function PersonalDetails({ setSelected }) {
  function formSubmission(event) {
    event.preventDefault();
    let span = document.querySelector(".missing-error");
    let emailInput = document.querySelector("form input[type=email]");
    let firstNameInput = document.querySelector(" #first-name");
    let lastNameInput = document.querySelector(" #last-name");

    if (
      emailInput.validity.valueMissing ||
      firstNameInput.validity.valueMissing ||
      lastNameInput.validity.valueMissing
    ) {
      span.style.opacity = "1";
    }

    if (document.querySelector("form").checkValidity()) {
      setSelected("education");
    }
  }

  return (
    <form>
      <h1>Personal Details</h1>
      <span className="missing-error">Please fill all required fields *</span>
      <div className="input-wrapper">
        <Input name="first-name" labelText="First Name" type="text"></Input>
        <Input name="last-name" labelText="Last Name" type="text"></Input>
      </div>
      <div className="input-wrapper">
        <Input name="email" labelText="Email" type="email"></Input>
        <Input name="phone" labelText="Phone" type="tel"></Input>
      </div>
      <div className="input-wrapper">
        <Input name="city" labelText="City" type="text"></Input>
        <Input name="country" labelText="Country" type="text"></Input>
      </div>
      <div className="input-wrapper">
        <Input name="linkedin" labelText="Linkedin" type="url"></Input>
        <Input name="github" labelText="Github" type="url"></Input>
      </div>
      <button className="next" type="submit" onClick={formSubmission}>
        Next
      </button>
    </form>
  );
}
