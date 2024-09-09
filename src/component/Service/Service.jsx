import React from "react";
import "./Service.css";
import logo from "../../assets/logo.svg";
import arrowicon from "../../assets/arrow.svg";

import Service_Data from "../../assets/Service-data";

const Service = () => {
  return (
    <div id="services" className="service">
      <div className="service-title">
        <h1>My Services</h1>
        <img className="themelogo" src={logo} alt="" />
      </div>
      <div className="service-container">
        {Service_Data.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.p_no}</h3>
              <h2>{service.p_name}</h2>
              <p>{service.p_desc}</p>
              <div className="servicetools">

              <div className="servicetool">
              <img className="toolicon" src={service.p_img1} alt="" />
              </div>
              <div className="servicetool">
              <img className="toolicon" src={service.p_img2} alt="" />
              </div>
              <div className="servicetool">
              <img className="toolicon" src={service.p_img3} alt="" />
              </div>
              <div className="servicetool">
              <img className="toolicon" src={service.p_img4} alt="" />
              </div>
              <div className="servicetool">
              <img className="toolicon" src={service.p_img5} alt="" />
              </div>
              
                
               
              </div>
              <div className="service-readmore">
                <p>Read More</p>
                <img className="arrowicon" src={arrowicon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
