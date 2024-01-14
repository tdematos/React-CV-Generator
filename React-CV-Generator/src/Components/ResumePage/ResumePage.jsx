import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/EdExperience";
import WorkExperience from "./Work Experience/WorkExperiece";
import "../ResumePage/ResumePage.css";

const ResumePage = () => {
  return (
    <div className="pageBody">
      <ResumeHeader />
      <Education />
      <Experience />
      <WorkExperience />
    </div>
  );
};

export default ResumePage;
