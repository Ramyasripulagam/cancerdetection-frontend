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

function Cancertypes(){
    return(
        <div className="cancers-types">
                <h1 className="heading">
                  CAN<span className="cancer-span">CERS</span>
                </h1>
                <div className="circle-con">
                  <div className="con1 hoverable">
                    <h1>
                      <FaUserMd/>
                    </h1>
                  </div> 
                  <div className="con2 hoverable">
                    <h1>
                      <FaHeart/>
                    </h1>
                  </div>
                  <div className="con3 hoverable">
                    <h1>
                      <FaBrain/>
                    </h1>
                  </div>
                  <div className="con4 hoverable">
                    <h1>
                      <FaLungs/>
                    </h1>
                  </div>
                  <div className="con5 hoverable">
                    <h1>
                      <FaFemale/>
                    </h1>
                  </div>
                  <div className="con6 hoverable">
                    <h1>
                      <FaSun />
                    </h1>
                  </div>
                  <div className="con7 hoverable">
                    <h1>
                      <FaTint/>
                    </h1>
                  </div>
                </div>
        </div>
    )
}

export default Cancertypes;