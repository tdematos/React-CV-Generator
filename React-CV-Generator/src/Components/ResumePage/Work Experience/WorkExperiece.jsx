import WorkInfo from "../WorkInfo/WorkInfo";

const WorkExperience = (props) => {
  return (
    <div className="workSection">
      <WorkInfo
        workStartDate={props.workStartDate}
        workEndDate={props.workEndDate}
        workLocation={props.workLocation}
        jobName={props.jobName}
        jobTitle={props.jobTitle}
        jobDescription={props.jobDescription}
      />
    </div>
  );
};

export default WorkExperience;
