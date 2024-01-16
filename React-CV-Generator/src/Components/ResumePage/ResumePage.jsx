import React, { useState } from "react";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/EdExperience";
import WorkExperience from "./Work Experience/WorkExperiece";
import "../ResumePage/ResumePage.css";

const ResumePage = () => {
  const [fullName, setfullName] = useState("Enter Name Here");

  const handleTextAreaChange = (e) => {
    // const inpuArea = document.getElementsByClassName("InputBox");

    setfullName(e.target.value);
  };

  return (
    <div className="pageBody">
      <ResumeHeader onChange={handleTextAreaChange} resumeHeader={fullName} />
      <Education />
      <Experience />
      <WorkExperience />
    </div>
  );
};

export default ResumePage;
