import "../Form-Input/FormInput.css";

const FormInput = ({ fullNameTitle, onChange }) => {
  return (
    <div className="inputContainer">
      <label for="fullName">{fullNameTitle}</label>
      <input className="InputBox" type="text" onChange={onChange} />
    </div>
  );
};

export default FormInput;
