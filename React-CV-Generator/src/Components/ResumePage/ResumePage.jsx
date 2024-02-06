import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/EdExperience";
import WorkExperience from "./Work Experience/WorkExperiece";
import "../ResumePage/ResumePage.css";

const ResumePage = ({ fullName, email, phoneNum, location }) => {
  return (
    <div className="pageBody">
      <ResumeHeader
        resumeHeader={fullName}
        email={email}
        number={phoneNum}
        location={location}
      />
      <Education />
      <Experience />
      <WorkExperience />
    </div>
  );
};

export default ResumePage;
