import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';


import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/" element= { <LoginPage/>} />
              <Route path="/signup" element= { <SignupPage/>} />
            </Routes>
        </BrowserRouter>

        
      
    </div>

    
  );

  
}

export default App;
