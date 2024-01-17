import "../Form-Input/FormInput.css";

const FormInput = ({ fullName, onChange }) => {
  return (
    <div className="inputContainer">
      <label for="fullName">{fullName}</label>
      <input className="InputBox" type="text" onChange={onChange} />
    </div>
  );
};

export default FormInput;
