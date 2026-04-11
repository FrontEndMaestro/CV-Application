import "../styles/personalDetails.css";
import Input from "./Input";
export default function PersonalDetails() {
  return (
    <form>
      <h1>Personal Details</h1>
      <div className="input-wrapper">
        <Input name="first-name" labelText="First Name" type="text"></Input>
        <Input name="last-name" labelText="Last Name" type="text"></Input>
      </div>
      <div className="input-wrapper">
        <Input name="email" labelText="Email" type="email"></Input>
        <Input name="phone" labelText="Phone" type="phone"></Input>
      </div>
      <div className="input-wrapper">
        <Input name="city" labelText="City" type="text"></Input>
        <Input name="country" labelText="Country" type="text"></Input>
      </div>
      <div className="input-wrapper">
        <Input name="linkedin" labelText="Linkedin" type="text"></Input>
        <Input name="github" labelText="Github" type="text"></Input>
      </div>
    </form>
  );
}
