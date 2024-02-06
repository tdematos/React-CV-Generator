import FormInput from "./Form-Input/FormInput";
import "../Personal-Info/PersonalInfo.css";

const PersonalInfo = ({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onLocationChange,
}) => {
  return (
    <div className="personalInfoContainer">
      <h2 className="personalHeading">Personal Information</h2>
      <form className="personalInfoForm">
        <FormInput fullNameTitle="Full Name:" onChange={onNameChange} />
        <FormInput fullNameTitle="Email:" onChange={onEmailChange} />
        <FormInput fullNameTitle="Phone Number:" onChange={onPhoneChange} />
        <FormInput fullNameTitle="Address:" onChange={onLocationChange} />
      </form>
    </div>
  );
};

export default PersonalInfo;
