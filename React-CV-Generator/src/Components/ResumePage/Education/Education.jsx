import EdExperience from "../Experience/EdExperience";
import Title from "../Title/Title";
import "../Education/Education.css";

const Education = () => {
  return (
    <div className="educationSection">
      <div className="titleBackground">
        <Title sectionTitle="Education" />
      </div>
      <EdExperience
        schoolDate="01/21 - 01/22"
        schoolLocation="Boston, MA"
        schoolName="Harvard University"
        degreeName="Computer Science"
      />
    </div>
  );
};

export default Education;
