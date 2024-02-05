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
  console.log(projects);
  return (
    <div id="projects">
      <h2>{projects.name}</h2>
      <p>{projects.about} </p>
      <ProjectItem technologies={projects.technologies}/>
    </div>
  );
}

export default ProjectList;
