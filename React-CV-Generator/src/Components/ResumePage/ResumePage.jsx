import ResumeHeader from "./ResumeHeader/ResumeHeader";
import Education from "./Education/Education";
import Experience from "./Experience/EdExperience";
import WorkExperience from "./Work Experience/WorkExperiece";
import PrintButton from "./PrintButton/PrintButton";
import "../ResumePage/ResumePage.css";

import React from "react";

const ResumePage = (props) => {
  return (
    <div className="pageBody">
      <ResumeHeader
        resumeHeader={props.fullName}
        email={props.email}
        number={props.phoneNum}
        location={props.location}
      />
      <Education
        startDate={props.startDate}
        endDate={props.endDate}
        schoolLocation={props.schoolLocation}
        schoolName={props.schoolName}
        degree={props.degree}
      />
      <Experience />
      <WorkExperience
        workStartDate={props.workStartDate}
        workEndDate={props.workEndDate}
        workLocation={props.workLocation}
        companyName={props.companyName}
        jobTitle={props.jobTitle}
        jobDescription={props.jobDescription}
      />
      <PrintButton text="Print" />
    </div>
  );
};

export default ResumePage;
