import "../Personal-Info/boxInfo.css";

const CustomizeForm = (props) => {
  return (
    <>
      <div className="custom-form-container">
        <div className="inner-container">
          <h3 className="form-title">Color</h3>
          <div className="color-container">
            <p>Accent</p> <div className="color-sphere"></div>
          </div>
        </div>
      </div>
      <div className="custom-form-container">
        <div className="font-inner-container">
          <h3 className="form-title">Font</h3>
          <div className="font-change-container">
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeForm;
