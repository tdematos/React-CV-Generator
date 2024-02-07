import FormInput from "./Form-Input/FormInput";
import "../Personal-Info/boxInfo.css";

const PersonalInfo = ({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onLocationChange,
}) => {
  return (
    <div className="boxInfoContainer">
      <h2 className="boxHeading">Personal Information</h2>
      <form className="boxInfoForm">
        <FormInput fullNameTitle="Full Name" onChange={onNameChange} />
        <FormInput fullNameTitle="Email" onChange={onEmailChange} />
        <FormInput fullNameTitle="Phone Number" onChange={onPhoneChange} />
        <FormInput fullNameTitle="Address" onChange={onLocationChange} />
      </form>
    </div>
  );
};

export default PersonalInfo;
