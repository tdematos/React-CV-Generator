import "../Personal-Info/boxInfo.css";
import FormInput from "../Personal-Info/Form-Input/FormInput";

const JobExperience = () => {
  return (
    <div className="boxInfoContainer-Exp">
      <h2 className="boxHeading">Work Experience</h2>

      <form className="boxInfoForm">
        <FormInput fullNameTitle="Company Name" />
        <FormInput fullNameTitle="Title" />
        <FormInput fullNameTitle="Start Date" />
        <FormInput fullNameTitle="End Date" />
        <FormInput fullNameTitle="Location" />
      </form>
    </div>
  );
};

export default JobExperience;
