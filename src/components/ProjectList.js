import React from "react";
import ProjectItem from "./ProjectItem";
/*function project2(){
  return (
    <div>
      <ProjectList id={user.projects.id} name={ProjectItem.name} technologies={ProjectItem.technologies}/>
    </div>
  )
}*/
function ProjectList({ projects }) {
  //console.log(projects);
  return (
    <div id="projects">
      {projects.map((project)=>(
        <div key={project.name}>
          <h2 key={project.name}>{project.name}</h2>
          <p key={project.about}>{project.about}</p>
          <ProjectItem technologies={project.technologies} key={project.technologies}/>
          
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
