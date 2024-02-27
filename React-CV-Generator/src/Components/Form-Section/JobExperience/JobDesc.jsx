import "../Personal-Info/boxinfo.css";

const JobDesc = ({ descriptionTitle, onChange }) => {
  return (
    <div className="inputContainer">
      <label className="jobDes">{descriptionTitle}</label>
      <textarea name="jobDes" className="descriptionBox" onChange={onChange} />
    </div>
  );
};

export default JobDesc;
