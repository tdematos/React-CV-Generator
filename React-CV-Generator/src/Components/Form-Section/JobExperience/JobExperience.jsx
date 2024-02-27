import "../Personal-Info/boxInfo.css";
import FormInput from "../Personal-Info/Form-Input/FormInput";
import { useState } from "react";
import JobDesc from "./JobDesc";

const JobExperience = (props) => {
  const [toggleEdMenu, setToggleEdMenu] = useState(true);

  function handleClick(props) {
    if (toggleEdMenu) {
      setToggleEdMenu(false);
    } else {
      setToggleEdMenu(true);
    }
  }

  return (
    <div
      className={
        !toggleEdMenu ? "boxInfoContainertwo-closed" : "boxInfoContainer-Exp"
      }
    >
      <div className="edHeadingContainer">
        <h2 className="boxHeading">Work Experience</h2>
        <p onClick={handleClick} className="menuToggle">
          {toggleEdMenu ? "-" : "+"}
        </p>
      </div>

      {toggleEdMenu ? (
        <form className="boxInfoForm">
          <FormInput
            fullNameTitle="Company Name"
            onChange={props.onCompanyNameChange}
          />
          <FormInput fullNameTitle="Title" onChange={props.onJobTitleChange} />
          <FormInput
            fullNameTitle="Start Date"
            onChange={props.onWorkSDateChange}
          />
          <FormInput
            fullNameTitle="End Date"
            onChange={props.onWorkEDayChange}
          />
          <FormInput
            fullNameTitle="Location"
            onChange={props.onWOrkLocationChange}
          />
          <JobDesc
            descriptionTitle="Job Description"
            onChange={props.onJobDescriptionChange}
          />
        </form>
      ) : null}
    </div>
  );
};

export default JobExperience;
