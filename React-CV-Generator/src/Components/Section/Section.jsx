import React, { useState } from "react";
import ResumePage from "../ResumePage/ResumePage";
import FormSection from "../Form-Section/FormSection";
import "../Section/Section.css";

const Section = () => {
  const [enterName, setEnterName] = useState("Enter full name");

  const handleChange = (event) => {
    console.log(event.target.value);
    setEnterName(event.target.value);
  };

  return (
    <>
      <div className="section">hi</div>
      <div className="section formSection">
        <FormSection onChange={handleChange} />
      </div>
      <div className="section resumePage">
        <ResumePage onChange={handleChange} fullName={enterName} />
      </div>
    </>
  );
};

export default Section;
