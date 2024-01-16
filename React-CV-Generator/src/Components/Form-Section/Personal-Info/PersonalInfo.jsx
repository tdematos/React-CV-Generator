import FormInput from "./Form-Input/FormInput";
import "../Personal-Info/PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="personalInfoContainer">
      <h2 className="personalHeading">Personal Information</h2>
      <form className="personalInfoForm">
        <FormInput fullName="Full Name:" />
      </form>
    </div>
  );
};

export default PersonalInfo;
