import React, { useState } from "react";
import ResumePage from "../ResumePage/ResumePage";
import FormSection from "../Form-Section/FormSection";
import "../Section/Section.css";

const Section = () => {
  const [nameInput, setNameInput] = useState("Enter full-name");
  const [emailInput, setEmailInput] = useState("name@email.com");
  const [phoneNumInput, setPhoneNumInput] = useState("111.222.3333");
  const [locationAdd, setlocationAdd] = useState("London, Uk");

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePhoneNumChange = (e) => {
    setPhoneNumInput(e.target.value);
  };
  const handlelocationChange = (e) => {
    setlocationAdd(e.target.value);
  };

  return (
    <>
      <div className="section">hi</div>
      <div className="section formSection">
        <FormSection
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneNumChange}
          onLocationChange={handlelocationChange}
        />
      </div>
      <div className="section resumePage">
        <ResumePage
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          fullName={nameInput}
          email={emailInput}
          phoneNum={phoneNumInput}
          location={locationAdd}
        />
      </div>
    </>
  );
};

export default Section;
