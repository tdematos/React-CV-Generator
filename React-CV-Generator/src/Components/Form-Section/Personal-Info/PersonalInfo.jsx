import FormInput from "./Form-Input/FormInput";
import "../Personal-Info/boxInfo.css";

const PersonalInfo = (props) => {
  return (
    <div className="boxInfoContainer">
      <h2 className="boxHeading">Personal Information</h2>
      <form className="boxInfoForm">
        <FormInput fullNameTitle="Full Name" onChange={props.onNameChange} />
        <FormInput fullNameTitle="Email" onChange={props.onEmailChange} />
        <FormInput
          fullNameTitle="Phone Number"
          onChange={props.onPhoneChange}
        />
        <FormInput fullNameTitle="Address" onChange={props.onLocationChange} />
      </form>
    </div>
  );
};

export default PersonalInfo;
