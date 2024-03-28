import "../Form-Section/Personal-Info/boxInfo.css";
import { RiPagesLine } from "react-icons/ri";
import { FaPencilRuler } from "react-icons/fa";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div
        className="content"
        style={props.contentStyle}
        onClick={props.clickContentToggle}
      >
        <RiPagesLine className="nav-icons" />
        <p className="navText">{props.txt1}</p>
      </div>
      <div
        className="customize"
        style={props.customizeStyle}
        onClick={props.clickCustomizeToggle}
      >
        <FaPencilRuler className="nav-icons" />
        <p className="navText">{props.txt2}</p>
      </div>
    </div>
  );
};

export default NavBar;
