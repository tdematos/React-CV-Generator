import { useState } from "react";

import FormInput from "../Personal-Info/Form-Input/FormInput";
import "../Personal-Info/boxInfo.css";

const EducationSection = () => {
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
    <div className="boxInfoContainertwo">
      <div className="edHeadingContainer">
        <h2 className="boxHeading">Education</h2>
        <p onClick={handleClick} className="menuToggle">
          {toggleEdMenu ? "+" : "-"}
        </p>
      </div>

      {!toggleEdMenu ? (
        <form className="boxInfoForm">
          <FormInput fullNameTitle="School" />
          <FormInput fullNameTitle="Degree" />
          <FormInput fullNameTitle="Start Date" />
          <FormInput fullNameTitle="End Date" />
          <FormInput fullNameTitle="Location" />
        </form>
      ) : null}
    </div>
  );
};

export default EducationSection;
