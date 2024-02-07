import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return (
    <div>
      <nav>
      {links.map((link,index)=>{
       return(
        <a key={index} href={link}>      
          {link}
        </a>
      )
    })}
      </nav>
      </div>
      );
    
   // })
  }
  
     // const MyKeys2=MyKeys.map(())
   //const AllLinks=links.map((number,index)=>{
    //for(let i=0;i<links.length;i++){
     // return i
    //}
   // links2=index[i]


   
   //)
 
export default NavBar;
