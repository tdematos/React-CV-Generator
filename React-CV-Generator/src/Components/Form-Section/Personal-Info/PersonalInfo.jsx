import FormInput from "./Form-Input/FormInput";
import { FaPersonCircleCheck } from "react-icons/fa6";
import "../Personal-Info/boxInfo.css";
import { useState } from "react";

const PersonalInfo = (props) => {
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
        !toggleEdMenu ? "boxInfoContainertwo-closed" : "boxInfoContainer"
      }
    >
      <div className="edHeadingContainer">
        <h2 className="boxHeading">
          <FaPersonCircleCheck className="box-icon" /> Personal Information
        </h2>
        <p onClick={handleClick} className="menuToggle">
          {toggleEdMenu ? "-" : "+"}
        </p>
      </div>

      {toggleEdMenu ? (
        <form className="boxInfoForm">
          <FormInput fullNameTitle="Full Name" onChange={props.onNameChange} />
          <FormInput fullNameTitle="Email" onChange={props.onEmailChange} />
          <FormInput
            fullNameTitle="Phone Number"
            onChange={props.onPhoneChange}
          />
          <FormInput
            fullNameTitle="Address"
            onChange={props.onLocationChange}
          />
        </form>
      ) : null}
    </div>
  );
};

export default PersonalInfo;
