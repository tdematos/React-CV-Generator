import React from "react";
import ButtonControlComp from "./ButtonControlComp/ButtonControlComp";
import PersonalInfo from "./Personal-Info/PersonalInfo";
import EducationSection from "./Education/EducationSection";
import JobExperience from "./JobExperience/JobExperience";

const FormSection = (props) => {
  const handleJobSectionChange = (updatedJobSection, index) => {
    // Call the function passed from the parent component to update the state
    props.setJobFormSections(index, updatedJobSection);
  };

  return (
    <>
      <ButtonControlComp
        addJob="+ Work"
        onAddWorkClick={props.onAddWorkClick}
        addEducation="+ Education"
        reset="reset"
        onResetButton={props.onResetButton}
      />
      <PersonalInfo
        onNameChange={props.onNameChange}
        onEmailChange={props.onEmailChange}
        onPhoneChange={props.onPhoneChange}
        onLocationChange={props.onLocationChange}
      />
      <EducationSection
        onSchoolChange={props.onSchoolChange}
        onDegreeChange={props.onDegreeChange}
        onStartDateChange={props.onStartDateChange}
        onEndDateChange={props.onEndDateChange}
        onSchoolLocationChange={props.onSchoolLocationChange}
      />

      {props.jobFormSections.map((form, index) => (
        <JobExperience
          key={index}
          workExperienceCount={index + 1}
          jobSection={form}
          onJobSectionChange={(updatedJobSection) =>
            handleJobSectionChange(updatedJobSection, index)
          }
          onDeleteClick={() => props.onDeleteClick(index)}
        />
      ))}
    </>
  );
};

export default FormSection;
