import Title from "../Title/Title";
import WorkInfo from "../WorkInfo/WorkInfo";

const WorkExperience = () => {
  return (
    <div className="workSection">
      <div className="titleBackground">
        <Title sectionTitle="Work Experience" />
      </div>
      <WorkInfo
        workDate="01/21 - 01/22"
        workLocation="Boston, MA"
        jobName="Full-Stack Developer"
        jobTitle="Software Engineer"
        jobDescription="I build fullfledged apps for a living..."
      />
    </div>
  );
};

export default WorkExperience;
