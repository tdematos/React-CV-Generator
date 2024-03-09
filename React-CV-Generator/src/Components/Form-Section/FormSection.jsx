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
        onCompanyNameChange={props.onCompanyNameChange}
        onJobTitleChange={props.onJobTitleChange}
        onWorkSDateChange={props.onWorkSDateChange}
        onWorkEDayChange={props.onWorkEDayChange}
        onWOrkLocationChange={props.onWOrkLocationChange}
        onJobDescriptionChange={props.onJobDescriptionChange}
        onDeleteClick={props.onDeleteClick}
      />
    </>
  );
};

export default FormSection;
