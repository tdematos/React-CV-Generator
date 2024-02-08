import "../Experience/EdExperience.css";

const EdExperience = (props) => {
  return (
    <div>
      <div className="educationInfo">
        <div className="dateAndPlace">
          <div className="dateContainer">
            <p className="schoolDate"> {props.startDate}</p>
            <p className="schoolDate">{props.endDate}</p>
          </div>

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
