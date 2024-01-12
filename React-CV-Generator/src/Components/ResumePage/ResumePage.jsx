import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import "../ResumePage/ResumePage.css";

const ResumePage = () => {
  return (
    <div className="pageBody">
      <ResumeHeader />
      <Education />
    </div>
  );
};

export default ResumePage;
