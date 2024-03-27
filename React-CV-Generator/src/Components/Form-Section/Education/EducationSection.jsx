import { useState } from "react";

import FormInput from "../Personal-Info/Form-Input/FormInput";
import "../Personal-Info/boxInfo.css";
import { GiGraduateCap } from "react-icons/gi";

const EducationSection = (props) => {
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
        toggleEdMenu ? "boxInfoContainertwo-closed" : "boxInfoContainer-Ed-Exp"
      }
    >
      <div className="edHeadingContainer">
        <h2 className="boxHeading">
          <GiGraduateCap className="box-icon" />
          Education
        </h2>
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
