import FormInput from "./Form-Input/FormInput";
import "../Personal-Info/PersonalInfo.css";

const PersonalInfo = ({ onChange }) => {
  return (
    <div className="personalInfoContainer">
      <h2 className="personalHeading">Personal Information</h2>
      <form className="personalInfoForm">
        <FormInput fullNameTitle="Full Name:" onChange={onChange} />
      </form>
    </div>
  );
};

export default PersonalInfo;
