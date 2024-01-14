import EdExperience from "../Experience/EdExperience";
import "../Education/Education.css";

const Education = (props) => {
  return (
    <div className="educationSection">
      <div className="titleBackground">
        <h2 className="educationTitle">{props.eTitle}</h2>
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
