import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import ShowNavBar from './components/ShowNavBar';
import Navbar from './components/Navbar';


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Sidenav from './components/Sidenav';
import PurchaseOrderPage from './pages/PurchaseOrderPage';


function App() {
return (
  <div className='App'>
    <BrowserRouter>
      <ShowNavBar>
        <Navbar/>
        <Sidenav />
      </ShowNavBar>
      <Routes>
        <Route path = "/home" element = { <Home/>} />
        <Route path = "/" element = { <LoginPage/>} />
        <Route path = "/signup" element = { <SignupPage/>} />
        <Route path = "/items" element = { <ItemPage/>} />
        <Route path = "/purchaseOrder" element = { <PurchaseOrderPage/>} />
      </Routes>
    </BrowserRouter>
  </div>
);
}
export default App;
