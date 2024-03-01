import React, { useState } from "react";
import ResumePage from "../ResumePage/ResumePage";
import FormSection from "../Form-Section/FormSection";
import NavBar from "./NavBar";
import "../Section/Section.css";

const Section = () => {
  const [nameInput, setNameInput] = useState("Enter full-name");
  const [emailInput, setEmailInput] = useState("name@email.com");
  const [phoneNumInput, setPhoneNumInput] = useState("111.222.3333");
  const [locationAdd, setlocationAdd] = useState("London, Uk");
  //useState for education section
  const [schoolInput, setSchoolInput] = useState("Harvard");
  const [degreeInput, setDegreeInput] = useState("Computer Science");
  const [startDate, setStartDate] = useState("01/21");
  const [endDate, setEndDate] = useState("12/01");
  const [schoolLocation, setSchoolLocation] = useState("Cambridge, MA");
  //useState for work section
  const [wStartDate, setWStartDate] = useState("1/23");
  const [wEndDate, setWEndDate] = useState("12/23");
  const [wLocation, setWLocation] = useState("Boston, MA");
  const [jobName, setJobName] = useState("Google");
  const [workTitle, setWorkTitle] = useState("Software Engineer");
  const [workDescription, setWorkDescription] = useState(
    "Hello this is where I work."
  );

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
  //functions for handling change to eduction section
  const handleSchoolNameChange = (e) => {
    setSchoolInput(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegreeInput(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value + " - ");
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSchoolLocation = (e) => {
    setSchoolLocation(e.target.value);
  };
  //functions for setting handling input for work seciton
  const handleWorkNameChange = (e) => {
    setJobName(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setWorkTitle(e.target.value);
  };

  const handleWorkSDateChange = (e) => {
    setWStartDate(e.target.value + " - ");
  };

  const handleWorkEDateChange = (e) => {
    setWEndDate(e.target.value);
  };

  const handleWorkLocationChange = (e) => {
    setWLocation(e.target.value);
  };

  const handleJobDescriptionChange = (e) => {
    setWorkDescription(e.target.value);
  };

  return (
    <>
      <div className="section navSection">
        <NavBar txt1="Content" txt2="Customize" />
      </div>
      <div className="section formSection">
        <FormSection
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneNumChange}
          onLocationChange={handlelocationChange}
          //functions for handling education input
          onSchoolChange={handleSchoolNameChange}
          onDegreeChange={handleDegreeChange}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onSchoolLocationChange={handleSchoolLocation}
          //functions for hanfling work experience section
          onWorkSDateChange={handleWorkSDateChange}
          onWorkEDayChange={handleWorkEDateChange}
          onWOrkLocationChange={handleWorkLocationChange}
          onCompanyNameChange={handleWorkNameChange}
          onJobTitleChange={handleJobTitleChange}
          onJobDescriptionChange={handleJobDescriptionChange}
        />
      </div>
      <div className="section resumePage">
        <ResumePage
          fullName={nameInput}
          email={emailInput}
          phoneNum={phoneNumInput}
          location={locationAdd}
          //input for education section in resume
          startDate={startDate}
          endDate={endDate}
          schoolLocation={schoolLocation}
          schoolName={schoolInput}
          degree={degreeInput}
          //imput for work experience
          workStartDate={wStartDate}
          workEndDate={wEndDate}
          workLocation={wLocation}
          companyName={jobName}
          jobTitle={workTitle}
          jobDescription={workDescription}
        />
      </div>
    </>
  );
};

export default Section;
