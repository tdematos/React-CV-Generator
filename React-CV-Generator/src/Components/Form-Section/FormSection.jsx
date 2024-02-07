import PersonalInfo from "./Personal-Info/PersonalInfo";
import EducationSection from "./Education/EducationSection";

const FormSection = ({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onLocationChange,
}) => {
  return (
    <>
      <PersonalInfo
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onPhoneChange={onPhoneChange}
        onLocationChange={onLocationChange}
      />
      <EducationSection />
    </>
  );
};

export default FormSection;
