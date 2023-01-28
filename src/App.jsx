import { Outlet, Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import Home from './component/Home'
import NoPage from "./component/NoPage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  useEffect(() => {
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBRqDW2lQQnc27vqB_jn9kTdheqojrnZK6sf_FczHIdUPw7LAtb40lA0vhP-vkXhRKMM&usqp=CAU';
    document.getElementsByTagName('head')[0].appendChild(link);
    link.style.borderRadius = ' 50%'
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut/>}>

          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

function LayOut(){

  return(
   <div className="layout">
     <TopBar/>
     <div className="outlet main-wrapper">
       <div className="wrapper-container">
        <Outlet/>
       </div>
     </div>
   </div>
  )
}

function TopBar () {

  return (
      <div className="topbar">     
          <nav>
          <DownloadButton />
          </nav>
      </div>
  )
}



const DownloadButton = () => (
  <button className="download-button">
    <span className="download-text">Download</span>
    <span className="download-icon">
      <FontAwesomeIcon icon={faArrowDown} />
    </span>
  </button>
)



export default App
