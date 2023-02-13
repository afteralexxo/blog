import { Outlet, Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './component/LandingPage'
import About from './component/About'
import FeedBack from './component/FeedBack'
import './App.css'

function App() {

  return (
    <div className="App">
    <LayOut />
    </div>
  )
}

function LayOut(){

  return(
   <div className="layout">
     <TopBar />
     <Wrapper />
   </div>
  )
}

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="navbar">
        <div className="brand">TWOD/</div>
        <ul className={`navbar-list ${isOpen ? 'show' : 'hide'}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
        </ul>
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-bars"></i>
          </button>
      </nav>
  );
}

function Wrapper () {
  return(
    <div className="wrapper">

    <LandingPage />
    <About />
    <FeedBack />
  

</div>
  )
}





export default App
