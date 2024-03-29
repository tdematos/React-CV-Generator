import React from "react";

import "../PrintButton/ButtonStyle.css";

const PrintButton = (props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button className="print-button" onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};

export default PrintButton;
