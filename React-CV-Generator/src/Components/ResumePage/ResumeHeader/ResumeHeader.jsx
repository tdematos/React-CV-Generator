import ContactMe from "./ContactMe";
import "../ResumeHeader/ResumeHeader.css";

const ResumeHeader = (props) => {
  return (
    <div className="nameSection">
      <h1 className="nameHeader">{props.resumeHeader}</h1>
      <ContactMe
        email={props.email}
        phone={props.number}
        location={props.location}
      />
    </div>
  );
};

export default ResumeHeader;
