import "./About.css";
import React from "react";

import profile from "../../assets/profile.jpg";
import logo from "../../assets/logo.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img className="themelogo" src={logo} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-img" src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              UI Developer with 7 years of experience, seeking a position to
              leverage extensive knowledge in creating detailed design
              specifications and front-end applications.
            </p>
            <p>
              Passionate Frontend Developer | JavaScript, HTML, CSS Expert |
              UI/UX Enthusiast
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 & CSS3</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>React js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};
export default About;
