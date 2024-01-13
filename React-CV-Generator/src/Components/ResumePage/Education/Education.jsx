import "../Education/Education.css";

const Education = () => {
  return (
    <div className="educationSection">
      <h2 className="educationTitle">Education</h2>
      <div className="educationInfo">
        <div className="dateAndPlace">
          <p className="schoolDate">01/21 - 01/22</p>
          <p className="schoolLocation">Boston, MA</p>
        </div>
        <div className="schoolInfo">
          <p className="schoolName">Harvard University</p>
          <p className="degreeName">Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
