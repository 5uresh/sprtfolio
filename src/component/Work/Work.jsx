import React from "react";
import "./Work.css";
import logo from "../../assets/logo.svg";
import arrowicon from '../../assets/arrow.svg'

import work_data from "../../assets/work-data";

const Work = () => {
  return (
    <div id="work" className="work">
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img className="work-img" src={logo} alt="" />
      </div>
      <div className="work-container">
        {work_data.map((work,index)=>{
            return <img className="workimg" key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="work-showmore">
            <p>Show More</p>
            <img className="arrowicon" src={arrowicon} alt=""/>
      </div>
    </div>
  );
};

export default Work;
