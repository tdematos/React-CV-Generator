import "../Personal-Info/boxInfo.css";
import { useState } from "react";

const ButtonControlComp = (props) => {
  return (
    <div className="control-buttons">
      <button onClick={props.onAddWorkClick} className="add-job-button">
        {props.addJob}
      </button>
      <button onClick={props.onResetButton} className="reset-button">
        {props.reset}
      </button>
    </div>
  );
};

export default ButtonControlComp;
