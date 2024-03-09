import "../Personal-Info/boxInfo.css";

const ButtonControlComp = (props) => {
  return (
    <div className="control-buttons">
      <button onClick={props.onAddWorkClick} className="add-job-button">
        {props.addJob}
      </button>
      <button className="add-education-button">{props.addEducation}</button>
      <button onClick={props.onResetButton} className="reset-button">
        {props.reset}
      </button>
    </div>
  );
};

export default ButtonControlComp;
