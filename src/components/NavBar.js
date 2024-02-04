import React from "react";
import Home from "./Home"
import About from "./About"
import ProjectList from "./ProjectList"
function NavBar() {
  const links = ["home", "about", "projects"];
     // const MyKeys2=MyKeys.map(())
   //const AllLinks=links.map((number,index)=>{
    //for(let i=0;i<links.length;i++){
     // return i
    //}
   // links2=index[i]
  const links2=links.map((link)=>{
    return (
      <div>
      <a href="#{link}" key={link}>{link}</a>
      </div>
    )
  })

   
   //)
  return (
  <div>
    <nav>
    <a >{links2}</a>;
    
    </nav>
    </div>
    );
  
 // })
}

export default NavBar;
