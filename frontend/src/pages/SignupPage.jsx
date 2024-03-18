import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import React from 'react'

function SignupPage() {
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("api/v1/auth/signup", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          });
          navigate('/');
          alert("User Registered Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>User Registation</h1>
    
    <form>
        <div class="form-group">
          <label>First name</label>
          <input type="text"  class="form-control" id="firstName" placeholder="Enter First Name"
          
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>Last name</label>
          <input type="text"  class="form-control" id="lastName" placeholder="Enter Last Name"
          
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          />

        </div>


        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default SignupPage;