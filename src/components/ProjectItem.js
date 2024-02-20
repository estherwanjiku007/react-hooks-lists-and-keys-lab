import React from "react";
/*import projects from "../data/user"
import About  from "./About";
import ProjectList from "./ProjectList";*/

function ProjectItem({ technologies}) {
 // const name=projects.name
 //console.log(technologies)
  return (      
      <div className="technologies">
        {technologies.map((technology,index)=>(         
          
         <span key={index}>{technology}</span>
         
        ))}
      </div>
    
  );
}

export default ProjectItem;
