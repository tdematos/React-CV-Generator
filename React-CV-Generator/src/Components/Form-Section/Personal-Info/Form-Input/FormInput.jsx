import "../Form-Input/FormInput.css";

const FormInput = ({ fullNameTitle, onChange }) => {
  return (
    <div className="inputContainer">
      <label>{fullNameTitle}</label>
      <input className="InputBox" type="text" onChange={onChange} />
    </div>
  );
};

export default FormInput;
