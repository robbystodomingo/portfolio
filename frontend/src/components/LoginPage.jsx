import React from 'react';
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


function LoginPage() {

    // const reqBody = {
    //     "email": "user",
    //     "password": "user" 
    // }
    // fetch("api/v1/auth/signin", {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(reqBody),
    // }).then((response) => Promise.all([response.json(), response.headers]))
    // .then(([body, headers]) => {
    //     const authValue = headers.get("authorization");
    //     console.log(authValue);
    //     console.log(body);
    // })
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.dir(error));

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("api/v1/auth/signin", {
          header: {
            "Content-Type": "application/json"
          },
          email: email,
          password: password,
          })
          .then((response) => {
            console.log(response.data);

            navigate('/home');
             
            //  if (response.data.message === "Email does not exist") 
            //  {
            //    alert("Email does not exist");
            //  } 
            //  else if(response.data.message === "Login Success")
            //  { 
                
            //     navigate('/home');
            //     console.log('Success:', JSON.stringify(response))
            //  } 
            //   else 
            //  { 
            //     alert("Incorrect Email and Password not match");
            //  }
          }, fail => {
           console.error(fail);
          })


        // .then((response) => Promise.all([response.json(), response.headers]))
        // .then(([body, headers]) => {
        //     const authValue = headers.get("authorization");
        //     console.log(authValue);
        //     console.log(body);
        //     alert("Login Successfully!");
        // })
        // .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.dir(error));
        

        } catch (err) {
          alert(err);
        }
    }

    // function ModeToggle() {
    //     const { mode, setMode } = useColorScheme();
    //     const [mounted, setMounted] = React.useState(false);
      
    //     // necessary for server-side rendering
    //     // because mode is undefined on the server
    //     React.useEffect(() => {
    //       setMounted(true);
    //     }, []);
    //     if (!mounted) {
    //       return <Button variant="soft">Change mode</Button>;
    //     }
      
    //     return (
    //       <Button
    //         variant="soft"
    //         onClick={() => {
    //           setMode(mode === 'light' ? 'dark' : 'light');
    //         }}
    //       >
    //         {mode === 'light' ? 'Turn dark' : 'Turn light'}
    //       </Button>
    //     );
    //   }
    return (
    //   <div>
    //    <div>
    // <div class="container mt-4" >
    // <div class="card">
    //         <h1>User Login</h1>
    
    // <form>
    //     <div class="form-group">
    //       <label>email</label>
    //       <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
    //       value={email}
    //       onChange={(event) => {
    //         setEmail(event.target.value);
    //       }}
          
    //       />
 
    //     </div>

    //     <div class="form-group">
    //         <label>password</label>
    //         <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
    //         value={password}
    //         onChange={(event) => {
    //           setPassword(event.target.value);
    //         }}
            
    //         />
    //       </div>

    //     <button type="submit" class="btn btn-primary mt-4" onClick={login} >Login</button>
       
    //   </form>
    // </div>
    // </div>
    //  </div>
    //   </div>

    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            id="email"
            placeholder="Enter Email"

            value={email}
            onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            id="password"
            placeholder="password"

            value={password}
            onChange={(event) => {
            setPassword(event.target.value);
          }}
          />
        </FormControl>
        <Button onClick={login} sx={{ mt: 1 /* margin top */ }}>Log in</Button>
        <Typography
          endDecorator={<Link href="/signup">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
    );
  }
  
  export default LoginPage;