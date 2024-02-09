import PersonalInfo from "./Personal-Info/PersonalInfo";
import EducationSection from "./Education/EducationSection";
import JobExperience from "./JobExperience/JobExperience";

const FormSection = (props) => {
  return (
    <>
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
      />
    </>
  );
};

export default FormSection;
