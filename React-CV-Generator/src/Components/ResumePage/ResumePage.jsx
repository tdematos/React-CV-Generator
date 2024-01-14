import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/EdExperience";
import "../ResumePage/ResumePage.css";

const ResumePage = () => {
  return (
    <div className="pageBody">
      <ResumeHeader />
      <Education eTitle="Education" />
      <Experience />
    </div>
  );
};

export default ResumePage;
