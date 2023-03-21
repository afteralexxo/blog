
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import { useState, useEffect } from 'react'
import React from 'react'
import LandingPage from './component/LandingPage'
import About from './component/About'
import FeedBack from './component/FeedBack'
import NoPage from './component/NoPage';
import './component/styles/hover.css'
import './component/styles/toggler.css'
import './component/styles/logo.css'
import './App.css'
import { ClimbingBoxLoader } from 'react-spinners'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setIsLoading(false);
  }, []);

  return (
    <div className='app'>
      {
        isLoading ? (
          <div className='loading-page'>
            <ClimbingBoxLoader color="#1e1e1eae" />
          </div>
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<LayOut />}>
                <Route index element={<LandingPage />} />
                <Route path="#about" element={<About />} />
                <Route path="#feedback" element={<FeedBack />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </Router>
        )
      }
    </div>
  )
}

function LayOut() {

  return (
    <div className="layout">
      <TopBar />
      <About />
      <FeedBack />

    </div>
  )
}

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo typing-effect">{"<Twod/>"}</a>
        <ul className={`navbar-list ${isOpen ? 'show' : 'hide'}`}>
          <li className='hov'>
            <a href="#home">Home</a>
          </li>
          <li className='hov'>
            <a href="#about">About Us</a>
          </li>
          <li className='hov'>
            <a href="#feedback">Contact Us</a>
          </li>
        </ul>
        <button className="navbar-toggler btn" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
              <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            </svg>
          </span>
          <span className="text">MENU</span>
        </button>
      </nav>
      <Outlet />
    </>
  );
}

export default App
