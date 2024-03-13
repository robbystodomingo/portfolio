import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './components/Home';


import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemPage from './pages/ItemPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
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
          <Navbar/>
            <Routes>
              <Route path = "/home" element = { <Home/>} />
              <Route path = "/" element = { <LoginPage/>} />
              <Route path = "/signup" element = { <SignupPage/>} />
              <Route path = "/items" element = { <ItemPage/>} />
            </Routes>
        </BrowserRouter>

        
      
    </div>

    
  );

  
}

export default App;
