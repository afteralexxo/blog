import React from "react";
import Card from './Card'
import Alex from './../asset/alex.png'

function LandingPage(){
    return(
      <div id="home" className="wrapper">

        <div className="landing-page">
        <div className="header-main">
        <h1 className="h1 hshed">Building the Web, 
          One Line of Code at a Time with </h1>
        <p className="h5">Alemayehu Mekonen</p>
        <p className="h6 hshed">Turning Ideas into Reality</p>
          <button type="button" className=" btn-dark">Dark</button>
        </div>
      <div className="img-container">
        <Card/>
      </div>
    </div>
      </div>
    )
}

export default LandingPage;