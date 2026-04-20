import "../styles/personalDetails.css";
import Input from "./Input";
import { setPersonalDetails } from "./Data";
export default function PersonalDetails({ setSelected }) {
  function formSubmission(formData) {
    let fname = formData.get("first-name");
    let lname = formData.get("last-name");
    let email = formData.get("email");
    let tel = formData.get("phone");
    let city = formData.get("city");
    let country = formData.get("country");
    let linkedin = formData.get("linkedin");
    let github = formData.get("github");
    setPersonalDetails({
      fname,
      lname,
      email,
      tel,
      city,
      country,
      linkedin,
      github,
    });
    setSelected("education");
  }

  return (
    <form action={formSubmission}>
      <h1>Personal Details</h1>
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
      <button className="next" type="submit">
        Next
      </button>
    </form>
  );
}
