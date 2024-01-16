import "../Form-Input/FormInput.css";

const FormInput = (props) => {
  return (
    <div className="inputContainer">
      <label for="fullName">{props.fullName}</label>
      <input className="InputBox" type="text" />
    </div>
  );
};

export default FormInput;
