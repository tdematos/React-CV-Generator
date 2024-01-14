import "../WorkInfo/WorkInfo.css";

const WorkInfo = (props) => {
  return (
    <div className="workSection">
      <div className="workInfo">
        <div className="dateAndPlace">
          <p className="workDate">{props.workDate}</p>
          <p className="workLocation">{props.workLocation}</p>
        </div>
        <div className="jobInfo">
          <p className="jobName">{props.jobName}</p>
          <p className="jobName">{props.jobTitle}</p>
        </div>
      </div>
      <p className="jobDescription">{props.jobDescription}</p>
    </div>
  );
};

export default WorkInfo;
