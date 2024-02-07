import EdExperience from "../Experience/EdExperience";
import Title from "../Title/Title";
import "../Education/Education.css";

const Education = (props) => {
  return (
    <div className="educationSection">
      <div className="titleBackground">
        <Title sectionTitle="Education" />
      </div>
      <EdExperience
        startDate={props.startDate}
        endDate={props.endDate}
        schoolLocation={props.schoolLocation}
        schoolName={props.schoolName}
        degreeName={props.degree}
      />
    </div>
  );
};

export default Education;
