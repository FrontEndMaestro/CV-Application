import "../styles/displayCV.css";
export default function DisplayCV({ cvDetails }) {
  return (
    <div className="display-container">
      <div className="cv-container">
        <h1 className="name-heading">
          {cvDetails.fname}
          {cvDetails.lname}
        </h1>
        <div className="personal-info-wrapper">
          {cvDetails.email}
          {cvDetails.tel != "" ? " | " : null}
          {cvDetails.tel}
          {cvDetails.github != "" ? " | " : null}
          <a href={cvDetails.github}>Github</a>
          {cvDetails.linkedin != "" ? " | " : null}
          <a href={cvDetails.linkedin}>Linkedin</a>
        </div>
        <div className="education-container">
          {cvDetails.education.length != 0 ? (
            <>
              <h2>Education </h2>
              <hr />

              {cvDetails.education.map((element, index) => {
                return (
                  <div key={index} className="education-display">
                    <div className="school-info">
                      <strong>{element.school}</strong> - {element.degree}
                    </div>
                    <div className="tenure">{element.date}</div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
        <div className="experience-container">
          {cvDetails.experiences.length != 0 ? (
            <>
              <h2>Experience</h2>
              <hr />
              {cvDetails.experiences.map((experience, index) => {
                return (
                  <div key={index} className="experience-display">
                    <div className="experience-heading">
                      <div className="experience-info">
                        <strong>{experience.job}</strong>, {experience.company}
                      </div>
                      <div className="tenure">{experience.date}</div>
                    </div>
                    <div className="experience-details">
                      {experience.description.split("\n").map((sentence) => {
                        return (
                          <>
                            {sentence}
                            <br />
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
