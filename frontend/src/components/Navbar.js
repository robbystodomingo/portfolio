import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const Navbar = () => {

  const navigate = useNavigate();

  async function logout(event) {
    event.preventDefault();
    try {
      await axios.post("api/v1/auth/logout", {
      
      }).then((response) => {
        console.log(response.data);
        navigate('/');
      alert("User Logged Out Successfully")
    });

    } catch (err) {
      alert(err);
    }
  }

    return (
    <div className="appbar">
      <div className="appbar-menu">
        <Link to={"/home"}>Home</Link>
      </div>

      <div className='profile'>
        <Link onClick={logout}>Logout</Link>

      </div>


    </div>
  
   
      
    );
  }

  export default Navbar;