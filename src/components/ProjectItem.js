import React from "react";
import projects from "../data/user"
import About  from "./About";
import ProjectList from "./ProjectList";

function ProjectItem({ technologies, name,about}) {
 // const name=projects.name
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span >
          {technologies}</span>   
      </div>
    </div>
  );
}

export default ProjectItem;
