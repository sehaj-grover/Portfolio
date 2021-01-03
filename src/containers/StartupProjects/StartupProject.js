import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import studiobrahma from "../../assests/images/studiobrahma.png";
import byjus from "../../assests/images/byjus.png";
import biz from "../../assests/images/biz.png";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            
                <div className="saaya-health-div" onClick={() => openProjectInNewWindow("https://www.studiobrahma.in/")}>
                  <img alt="Darryl Working" src={studiobrahma}></img>
                </div>

                <div className="saaya-health-div" onClick={() => openProjectInNewWindow("https://byjus.com/")}>
                  <img alt="Darryl Working" src={byjus}></img>
                </div>

                <div className="saaya-health-div" onClick={() => openProjectInNewWindow("https://bizanalyzer.biz2credit.com/")}>
                  <img alt="Darryl Working" src={biz}></img>
                </div>
              
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
