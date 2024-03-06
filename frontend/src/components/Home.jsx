import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Home() {

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
      <div>
         <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
              <Button type="submit" class="btn btn-primary mt-4" onClick={logout}color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
  
  export default Home;