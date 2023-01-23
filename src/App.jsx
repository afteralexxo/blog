import { Outlet, Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import Home from './component/Home'
import NoPage from "./component/NoPage"
import logo from './assets/logo.png'
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
          {/* <Route path="home" element={<Home />} />   */}
          {/* <Route path="home" element={<Home />} /> */}
          {/* <Route path="home" element={<Home />} /> */}
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
          <a className="logo">
              <img src={logo} alt="" width="200px" height="100%" />
          </a>
          <nav>
           <ul className="nav-menu">
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
            <li className="nav-item"><Link to='/projects'>Projects</Link></li>
            <li className="nav-item"><Link to='/tools'>Tools</Link></li>
           </ul>
          </nav>
      </div>
  )
}


export default App
