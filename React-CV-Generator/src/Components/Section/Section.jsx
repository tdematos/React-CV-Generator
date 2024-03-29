import React, { useState } from "react";
import ResumePage from "../ResumePage/ResumePage";
import FormSection from "../Form-Section/FormSection";
import NavBar from "./NavBar";
import CustomizeForm from "../Form-Section/CustomizeForm/CustomizeForm";

import JobExperience from "../Form-Section/JobExperience/JobExperience";
import WorkExperience from "../ResumePage/Work Experience/WorkExperiece";
import "../Section/Section.css";

const Section = (props) => {
  const [nameInput, setNameInput] = useState("Enter full-name");
  const [emailInput, setEmailInput] = useState("name@email.com");
  const [phoneNumInput, setPhoneNumInput] = useState("111.222.3333");
  const [locationAdd, setlocationAdd] = useState("London, Uk");
  //useState for education section
  const [schoolInput, setSchoolInput] = useState("Harvard");
  const [degreeInput, setDegreeInput] = useState("Computer Science");
  const [startDate, setStartDate] = useState("01/21 ");
  const [endDate, setEndDate] = useState(" - 12/01");
  const [schoolLocation, setSchoolLocation] = useState("Cambridge, MA");
  //useState for work section
  const [toggleContent, setToggleContent] = useState(true);
  const [jobFormSections, setJobFormSections] = useState([]);

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
  //functions for handling menu toggle

  const handleContentToggle = () => {
    setToggleContent(true);
  };

  const handleCustomizeToggle = () => {
    setToggleContent(false);
  };

  const handleDeleteClick = () => {
    console.log("Test");
  };

  const handleAddJobSection = () => {
    if (jobFormSections.length < 3) {
      const newJobSection = {
        startDate: "",
        endDate: "",
        location: "",
        companyName: "",
        jobTitle: "",
        jobDescription: "",
      };
      const updatedJobFormSections = [...jobFormSections, newJobSection];
      setJobFormSections(updatedJobFormSections);
      console.log("Job Form Sections:", updatedJobFormSections);
    }
  };

  const handleJobSectionUpdate = (index, updatedSection) => {
    const updatedSections = [...jobFormSections];
    updatedSections[index] = updatedSection;
    setJobFormSections(updatedSections);
  };

  //function for pressing the reset button
  const handleResetClick = () => {
    setNameInput("Enter full-name");
    setEmailInput("name@email.com");
    setPhoneNumInput("111.222.3333");
    setlocationAdd("London, Uk");
    setSchoolInput("Harvard");
    setDegreeInput("Computer Science");
    setStartDate("1/24");
    setEndDate(" -12/1");
    setSchoolLocation("Cambridge, MA");

    setJobFormSections([]);
  };

  return (
    <>
      <div className="section navSection">
        <NavBar
          contentStyle={
            toggleContent
              ? { backgroundColor: "#f5f5f5", borderRadius: "15px" }
              : { backgroundColor: "white" }
          }
          customizeStyle={
            !toggleContent
              ? { backgroundColor: "#f5f5f5", borderRadius: "15px" }
              : { backgroundColor: "white" }
          }
          txt1="Content"
          txt2="Customize"
          clickContentToggle={handleContentToggle}
          clickCustomizeToggle={handleCustomizeToggle}
        />
      </div>
      <div className="section formSection">
        {toggleContent === true ? (
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
            onDeleteClick={handleDeleteClick}
            //Props for handling adding sections
            onAddWorkClick={handleAddJobSection} //button for adding section
            jobFormSections={jobFormSections}
            setJobFormSections={handleJobSectionUpdate}
            // function to toggle reset button
            onResetButton={handleResetClick}
            JobExperienceContainer={jobFormSections.map((form, index) => {
              return (
                <JobExperience
                  key={index}
                  workStartDate={form.startDate}
                  workEndDate={form.endDate}
                  workLocation={form.location}
                  jobName={form.companyName}
                  jobTitle={form.jobTitle}
                  jobDescription={form.jobDescription}
                />
              );
            })}
          />
        ) : (
          <CustomizeForm />
        )}
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
          //components for work experience component
          workExperienceSection={jobFormSections.map((form, index) => {
            return (
              <WorkExperience
                key={index}
                workStartDate={form.startDate}
                workEndDate={form.endDate}
                workLocation={form.location}
                jobName={form.companyName}
                jobTitle={form.jobTitle}
                jobDescription={form.jobDescription}
              />
            );
          })}
        />
      </div>
    </>
  );
};

export default Section;
