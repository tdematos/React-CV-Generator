import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import "../ResumePage/ResumePage.css";

const ResumePage = () => {
  return (
    <div className="pageBody">
      <ResumeHeader />
      <Education />
      <Experience />
    </div>
  );
};

export default ResumePage;
