import React, { useState } from "react";
import "../Personal-Info/boxInfo.css";
import FormInput from "../Personal-Info/Form-Input/FormInput";
import { MdWork } from "react-icons/md";

import JobDesc from "./JobDesc";

const JobExperience = (props) => {
  const [toggleEdMenu, setToggleEdMenu] = useState(true);

  const handleInputChange = (field, value) => {
    const updatedJobSection = { ...props.jobSection, [field]: value };
    props.onJobSectionChange(updatedJobSection);
  };

  const handleClick = () => {
    setToggleEdMenu(!toggleEdMenu);
  };

  const handleAlertClick = () => {
    alert("this works!");
  };

  return (
    <div
      className={
        !toggleEdMenu ? "boxInfoContainertwo-closed" : "boxInfoContainer-Exp"
      }
    >
      <div className="edHeadingContainer">
        <h2 className="boxHeading">
          <MdWork />
          Work Experience {props.workExperienceCount}
        </h2>
        <p onClick={handleClick} className="menuToggle">
          {toggleEdMenu ? "-" : "+"}
        </p>
      </div>

      {toggleEdMenu && (
        <form className="boxInfoForm">
          <FormInput
            fullNameTitle="Company Name"
            value={props.jobSection.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
          />
          <FormInput
            fullNameTitle="Title"
            value={props.jobSection.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          />
          <FormInput
            fullNameTitle="Start Date"
            value={props.jobSection.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
          />
          <FormInput
            fullNameTitle="End Date"
            value={props.jobSection.endDate}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
          />
          <FormInput
            fullNameTitle="Location"
            value={props.jobSection.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
          <JobDesc
            descriptionTitle="Job Description"
            value={props.jobSection.jobDescription}
            onChange={(e) =>
              handleInputChange("jobDescription", e.target.value)
            }
          />
          <div className="button-container">
            <button
              className="delete-button"
              type="button"
              onClick={handleAlertClick}
            >
              Delete
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default JobExperience;
