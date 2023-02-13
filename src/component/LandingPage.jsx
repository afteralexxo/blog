import React from "react";
import Alex from './../asset/alex.png'

function LandingPage(){
    return(
        <div className="landing-page">
        <div className="header-main">
        <h1 className="h1">Building the Web, 
          One Line of Code at a Time with </h1>
        <p className="h5">Alemayehu Mekonen</p>
        <p className="h6">Turning Ideas into Reality</p>
          <button type="button" className="btn btn-dark">Dark</button>
        </div>
      <div className="img-container">
        <img src={Alex} className="profile" alt="alex"/>
      </div>
    </div>
    )
}

export default LandingPage;