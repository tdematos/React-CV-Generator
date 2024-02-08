import { useState } from "react";

import FormInput from "../Personal-Info/Form-Input/FormInput";
import "../Personal-Info/boxInfo.css";

const EducationSection = (props) => {
  const [toggleEdMenu, setToggleEdMenu] = useState(true);

  function handleClick() {
    if (toggleEdMenu) {
      setToggleEdMenu(false);
      console.log(toggle);
    } else {
      setToggleEdMenu(true);
      console.log(toggle);
    }
  }

  return (
    <div
      className={
        toggleEdMenu ? "boxInfoContainertwo-closed" : "boxInfoContainertwo"
      }
    >
      <div className="edHeadingContainer">
        <h2 className="boxHeading">Education</h2>
        <p onClick={handleClick} className="menuToggle">
          {toggleEdMenu ? "+" : "-"}
        </p>
      </div>

      {!toggleEdMenu ? (
        <form className="boxInfoForm">
          <FormInput fullNameTitle="School" onChange={props.onSchoolChange} />
          <FormInput fullNameTitle="Degree" onChange={props.onDegreeChange} />
          <FormInput
            fullNameTitle="Start Date"
            onChange={props.onStartDateChange}
          />
          <FormInput
            fullNameTitle="End Date"
            onChange={props.onEndDateChange}
          />
          <FormInput
            fullNameTitle="Location"
            onChange={props.onSchoolLocationChange}
          />
        </form>
      ) : null}
    </div>
  );
};

export default EducationSection;
