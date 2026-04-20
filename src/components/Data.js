let Data = {
  fname: "",
  lname: "",
  email: "",
  tel: "",
  city: "",
  country: "",
  linkedin: "",
  github: "",
  education: [],
};

function setPersonalDetails(personalDetailsObj) {
  Data = { ...Data, ...personalDetailsObj };
}

function setEducationData(educationData) {
  Data.education.push(educationData);
}

export { Data, setPersonalDetails, setEducationData };
