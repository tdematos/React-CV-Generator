import "../ResumeHeader/Contact.css";

const ContactMe = (props) => {
  return (
    <div className="contactSection">
      <p className="email">{props.email}</p>
      <p className="phone">{props.phone}</p>
      <p className="location">{props.location}</p>
    </div>
  );
};

export default ContactMe;
