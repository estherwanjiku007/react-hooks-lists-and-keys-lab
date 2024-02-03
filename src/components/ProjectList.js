import React from "react";
import  projects from "../data/user";
import user from "../data/user"
import ProjectItem from "./ProjectItem";
/*function project2(){
  return (
    <div>
      <ProjectList id={user.projects.id} name={ProjectItem.name} technologies={ProjectItem.technologies}/>
    </div>
  )
}*/
function ProjectList({ projects }) {
 // console.log(projects);
  return (
    <div id="projects">
      <h2>{projects.name}</h2>
      <p>{projects.about} </p>
      <li id="project-list" key={projects.id}>
        {projects.map((project)=>{
          return(
          <li>
         <ProjectItem name={project.name } technologies={project.technologies} about={project.about}/>
          </li>
          )
})}
        </li>
    </div>
  );
}

export default ProjectList;
