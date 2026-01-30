import "./cancertypes.css";
import {
  FaUserMd,
  FaHeart,
  FaBrain,
  FaLungs,
  FaFemale,
  FaSun,
  FaTint,
} from "react-icons/fa";

function Cancertypes() {
  return (
    <div className="cancers-types">
      <h1 className="heading">
        CAN<span className="cancer-span">CERS</span>
      </h1>

      <div className="circle-con">
        <div className="con1 hoverable">
          <FaUserMd size={40} aria-label="Doctor Icon" />
        </div>
        <div className="con2 hoverable">
          <FaHeart size={40} aria-label="Heart Icon" />
        </div>
        <div className="con3 hoverable">
          <FaBrain size={40} aria-label="Brain Icon" />
        </div>
        <div className="con4 hoverable">
          <FaLungs size={40} aria-label="Lungs Icon" />
        </div>
        <div className="con5 hoverable">
          <FaFemale size={40} aria-label="Female Icon" />
        </div>
        <div className="con6 hoverable">
          <FaSun size={40} aria-label="Sun Icon" />
        </div>
        <div className="con7 hoverable">
          <FaTint size={40} aria-label="Drop Icon" />
        </div>
      </div>
    </div>
  );
}

export default Cancertypes;
