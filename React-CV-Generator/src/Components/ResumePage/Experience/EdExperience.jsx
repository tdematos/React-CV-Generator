const EdExperience = (props) => {
  return (
    <div>
      <div className="educationInfo">
        <div className="dateAndPlace">
          <p className="schoolDate">{props.schoolDate}</p>
          <p className="schoolLocation">{props.schoolLocation}</p>
        </div>
        <div className="schoolInfo">
          <p className="schoolName">{props.schoolName}</p>
          <p className="degreeName">{props.degreeName}</p>
        </div>
      </div>
    </div>
  );
};

export default EdExperience;
