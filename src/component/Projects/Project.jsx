import React from "react";
import "./Project.css";
import logo from "../../assets/logo.svg";

const Project = () => {
  return (
    <div className="project">
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={logo} alt=""/>
      </div>
      <div className="project-container">

      </div>
    </div>
  );
};

export default Project;
