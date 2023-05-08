import React from "react";
import panner from "../panner_img.png";
// import panner2 from "../panner2.jpg";
import "../styles/panner.css";
import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon2.png";
import icon4 from "../icons/icon4.png";
import icon5 from "../icons/icon4.png";
import icon6 from "../icons/icon6.png";
import icon7 from "../icons/icon7.png";
import icon8 from "../icons/icon8.png";
import icon9 from "../icons/icon9.png";
import icon10 from "../icons/icon10.png";
function Panner() {
  return (
    <React.Fragment>
      <div className="panner">
        <img src={panner} alt="panner" className="panner_img1" />
        <div className="panner_info">Get 50% Off on Selected categories</div>
        <div className="panner_icons1">
          {" "}
          <img src={icon1} alt="" className="panner_icons1--1" />
          <img src={icon2} alt="" className="panner_icons1--2" />
          <img src={icon3} alt="" className="panner_icons1--3" />
          <img src={icon4} alt="" className="panner_icons1--4" />
          <img src={icon5} alt="" className="panner_icons1--5" />
          <img src={icon6} alt="" className="panner_icons1--6" />
          <img src={icon7} alt="" className="panner_icons1--7" />
          <img src={icon8} alt="" className="panner_icons1--8" />
          <img src={icon9} alt="" className="panner_icons1--9" />
          <img src={icon10} alt="" className="panner_icons1--10" />
        </div>

        <div className="panner_icons2">
          {" "}
          <img src={icon1} alt="" className="panner_icons2--1" />
          <img src={icon2} alt="" className="panner_icons2--2" />
          <img src={icon3} alt="" className="panner_icons2--3" />
          <img src={icon4} alt="" className="panner_icons2--4" />
          <img src={icon5} alt="" className="panner_icons2--5" />
          <img src={icon6} alt="" className="panner_icons2--6" />
          <img src={icon7} alt="" className="panner_icons2--7" />
          <img src={icon8} alt="" className="panner_icons2--8" />
          <img src={icon9} alt="" className="panner_icons2--9" />
          <img src={icon10} alt="" className="panner_icons2--10" />
        </div>
        <img src={panner} alt="panner2" className="panner_img2" />
      </div>
    </React.Fragment>
  );
}
export default Panner;
