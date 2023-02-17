import React from "react";
import { useState } from "react";
import axios from "axios";

function About(){

  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDownloadClick = async () => {
    const response = await axios.get('http://feedbackrestapi-production.up.railway.app/pdf', {
      responseType: 'blob',
    });
    const fileBlob = response.data;

    const url = URL.createObjectURL(fileBlob);
    setDownloadUrl(url);
  };
    return(
        <div className="wrapper">

        <div id="about" className="about">
        <div className="summary">
          <h3>About me</h3>
          <p>My name is Alemayehu Mekonen. I am a skilled and experienced web developer from Ethiopia with a Bachelor's degree in Computer Science. I have a deep understanding of programming concepts and an ability to apply them to my work as a web developer. I am well-versed in various web development technologies, including REACT, NODEJS, MONGODB, and more, which enables me to create and maintain websites and web-based applications with ease. I understand that user experience is key, and I put a lot of effort into making sure that the websites I develop are easy to navigate, visually appealing, and provide a seamless experience for the user. Whether it's a simple brochure website or a complex web application, my goal is to create something that is not only functional but also intuitive and easy to use.

          </p>
        </div>
        <div className="aboutme">
          <p>
              In addition to my technical skills, I am also a strong communicator and
               a team player.always eager to learn new technologies and skills to stay
                ahead of the curve.
                Hey there! I've been keeping myself busy lately by expanding my skillset through
                 online learning. I'm proud to say that I've recently completed courses in
                  JavaScript, Python, React, HTML, and CSS. It's been a challenging journey
                  , but I'm so excited to have acquired knowledge in these important technologies.
                   I'm ready to put my skills
                 to the test and tackle new projects. Here's a quick rundown of my accomplishments
                 </p>
          <hr/>
          <ul className="certefticate">
            <li><a href="https://www.sololearn.com/certificates/CT-NSSHNZQZ">Coding for Marketers, Solo Learn</a>  </li>
            <li><a href="https://www.sololearn.com/certificates/CT-KLC4PYL6">Game Development with JS, Solo Learn</a></li>
            <li><a href="https://www.sololearn.com/certificates/CT-XNARYARP">Responsive Web Design, Solo Learn</a>
 </li>
            <li><a href="https://www.sololearn.com/certificates/CT-W0FYBUMJ">PHP, Solo Learn</a> </li>
            <li><a href=" https://www.sololearn.com/certificates/CT-ZL1K0HKV">Java, Solo Learn</a></li>
            </ul>
            <p>Whether you are looking to build a simple portfolio website or a complex e-commerce platform, I am confident in my ability to deliver a website that will not only meet your needs but also enhance your online presence and help you achieve your business goals.</p>
            <div>
<a href="https://drive.google.com/file/d/1z_41Dg6fQTTP9CFjZOGHC_bBsKrIs1Ra/view?usp=sharing" target="_blank" rel="noopener noreferrer">
<button className="btn btn-dark" >Download CV</button>
    </a>
    </div>
        </div>
      </div>
        </div>
    )
}

export default About
