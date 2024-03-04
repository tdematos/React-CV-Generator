import "../WorkInfo/WorkInfo.css";

const WorkInfo = (props) => {
  return (
    <div className="workSection">
      <div className="workInfo">
        <div className="dateAndPlace">
          <div className="date-container">
            <p className="workDate">{props.workStartDate}</p>
            <p className="workDate">{props.workEndDate}</p>
          </div>
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
