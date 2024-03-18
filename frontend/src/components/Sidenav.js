import React from 'react'
import { SidebarData } from './SidebarData';
import { Link, NavLink } from "react-router-dom";

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

import { useState } from 'react';

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
