const EdExperience = (props) => {
  return (
    <div>
      <div className="educationInfo">
        <div className="dateAndPlace">
          <p className="schoolDate">{props.startDate}</p>
          <p className="schoolDate">{props.endDate}</p>
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
