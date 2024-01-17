import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/EdExperience";
import WorkExperience from "./Work Experience/WorkExperiece";
import "../ResumePage/ResumePage.css";

const ResumePage = ({ fullName, onChange }) => {
  return (
    <div className="pageBody">
      <ResumeHeader
        onChange={onChange}
        resumeHeader={fullName}
        email="name@email.com"
        number="111.111.1111"
        location="London, UK"
      />
      <Education />
      <Experience />
      <WorkExperience />
    </div>
  );
};

export default ResumePage;
