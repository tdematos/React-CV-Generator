import "../Personal-Info/boxInfo.css";
import FormInput from "../Personal-Info/Form-Input/FormInput";
import { useState } from "react";

const JobExperience = () => {
  const [toggleEdMenu, setToggleEdMenu] = useState(true);

  function handleClick() {
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
          <FormInput fullNameTitle="Company Name" />
          <FormInput fullNameTitle="Title" />
          <FormInput fullNameTitle="Start Date" />
          <FormInput fullNameTitle="End Date" />
          <FormInput fullNameTitle="Location" />
        </form>
      ) : null}
    </div>
  );
};

export default JobExperience;
