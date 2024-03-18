import React from 'react'
import { SidebarData } from './SidebarData';
import { NavLink } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'




export default function Sidenav(){

   
    
     
  return (

    <React.Fragment>
    <section>
      <div className="sidenav">
          {
               SidebarData.map((item, index) => {
                return(
                    <div key={index}>
                        <NavLink to={item.path}>
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>

     )
}
