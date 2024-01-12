import ContactMe from "./ContactMe";
import "../ResumeHeader/ResumeHeader.css";

const ResumeHeader = () => {
  return (
    <div className="nameSection">
      <h1 className="nameHeader">Enter Name Here</h1>
      <ContactMe />
    </div>
  );
};

export default ResumeHeader;
