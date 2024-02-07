import FormInput from "../Personal-Info/Form-Input/FormInput";
import "../Personal-Info/boxInfo.css";

const EducationSection = () => {
  return (
    <div className="boxInfoContainertwo">
      <h2 className="boxHeading">Education</h2>
      <form className="boxInfoForm">
        <FormInput fullNameTitle="School" />
        <FormInput fullNameTitle="Degree" />
        <FormInput fullNameTitle="Start Date" />
        <FormInput fullNameTitle="End Date" />
        <FormInput fullNameTitle="Location" />
      </form>
    </div>
  );
};

export default EducationSection;
