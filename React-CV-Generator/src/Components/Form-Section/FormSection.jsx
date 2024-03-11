import PersonalInfo from "./Personal-Info/PersonalInfo";
import EducationSection from "./Education/EducationSection";
import JobExperience from "./JobExperience/JobExperience";
import ButtonControlComp from "./ButtonControlComp/ButtonControlComp";

const FormSection = (props) => {
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
      <JobExperience
        workExperienceCount={props.workExperienceCount}
        onCompanyNameChange={props.onCompanyNameChange}
        onJobTitleChange={props.onJobTitleChange}
        onWorkSDateChange={props.onWorkSDateChange}
        onWorkEDayChange={props.onWorkEDayChange}
        onWOrkLocationChange={props.onWOrkLocationChange}
        onJobDescriptionChange={props.onJobDescriptionChange}
        onDeleteClick={props.onDeleteClick}
      />
      {props.JobExperienceContainer.map((form, index) => (
        <JobExperience
          key={index}
          workExperienceCount={index + 1}
          onCompanyNameChange={(e) => props.onCompanyNameChange(e, index)}
          onJobTitleChange={(e) => props.onJobTitleChange(e, index)}
          onWorkSDateChange={(e) => props.onWorkSDateChange(e, index)}
          onWorkEDayChange={(e) => props.onWorkEDayChange(e, index)}
          onWOrkLocationChange={(e) => props.onWOrkLocationChange(e, index)}
          onJobDescriptionChange={(e) => props.onJobDescriptionChange(e, index)}
          onDeleteClick={(e) => props.onDeleteClick(e, index)}
        />
      ))}
    </>
  );
};

export default FormSection;
