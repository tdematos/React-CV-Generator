import Title from "../Title/Title";
import WorkInfo from "../WorkInfo/WorkInfo";

const WorkExperience = (props) => {
  return (
    <div className="workSection">
      <div className="titleBackground">
        <Title sectionTitle="Work Experience" />
      </div>
      <WorkInfo
        workStartDate={props.workStartDate}
        workEndDate={props.workEndDate}
        workLocation={props.workLocation}
        jobName={props.companyName}
        jobTitle={props.jobTitle}
        jobDescription={props.jobDescription}
      />
    </div>
  );
};

export default WorkExperience;
