import ContactMe from "./ContactMe";
import "../ResumeHeader/ResumeHeader.css";

const ResumeHeader = (props) => {
  return (
    <div className="nameSection">
      <h1 className="nameHeader">{props.resumeHeader}</h1>
      <ContactMe
        email="name@email.com"
        phone="111.111.1111"
        location="London, UK"
      />
    </div>
  );
};

export default ResumeHeader;
