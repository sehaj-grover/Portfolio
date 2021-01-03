import React from "react";
import "../StartupProjects/StartupProjects.css";
import { academicProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import eve from "../../assests/images/logo.png";
import Button from "../../components/button/Button";
import {socialMediaLinks } from "../../portfolio";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="academicprojects">
      <div>
        <h1 className="skills-heading">{academicProjects.title}</h1>
        <p className="subTitle project-subtitle">{academicProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            
                <div className="saaya-health-div" onClick={() => openProjectInNewWindow("https://nameless-brushlands-36117.herokuapp.com/")}>
                  <img alt="Darryl Working" src={eve}></img>
                </div>
              
          </div>

          <div className="starup-project-image"></div>
        </div>
      </div>
      <Button text={"Check out More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
    </div>
    </Fade>
  );
}
