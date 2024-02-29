import React from "react";

import "../PrintButton/ButtonStyle.css";

const PrintButton = (props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button className="print-button" onClick={handlePrint}>
        {props.text}
      </button>
    </>
  );
};

export default PrintButton;
