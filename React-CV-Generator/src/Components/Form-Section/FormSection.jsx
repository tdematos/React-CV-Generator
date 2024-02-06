import PersonalInfo from "./Personal-Info/PersonalInfo";

const FormSection = ({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onLocationChange,
}) => {
  return (
    <PersonalInfo
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onPhoneChange={onPhoneChange}
      onLocationChange={onLocationChange}
    />
  );
};

export default FormSection;
