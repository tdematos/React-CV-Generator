import PersonalInfo from "./Personal-Info/PersonalInfo";

const FormSection = ({ onNameChange, onEmailChange }) => {
  return (
    <PersonalInfo onNameChange={onNameChange} onEmailChange={onEmailChange} />
  );
};

export default FormSection;
