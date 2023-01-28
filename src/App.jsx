import { Outlet, Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import NoPage from "./component/NoPage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

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



function Download() {
  const url = './assets/Alemayehu.pdf';
  const link = document.createElement("a");
  link.href = url;
  link.download = 'Alemayehu.pdf';
  document.body.appendChild(link);
  link.click();
}

const DownloadButton = () => (
  <button onClick={Download} className="download-button">
    <span className="download-text">Download</span>
    <span className="download-icon">
      <FontAwesomeIcon icon={faArrowDown} />
    </span>
  </button>
)



export default App
