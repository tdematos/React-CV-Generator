import ResumePage from "../ResumePage/ResumePage";
import FormSection from "../Form-Section/FormSection";
import "../Section/Section.css";

const Section = () => {
  return (
    <>
      <div className="section">hi</div>
      <div className="section formSection">
        <FormSection />
      </div>
      <div className="section resumePage">
        <ResumePage />
      </div>
    </>
  );
};

export default Section;
