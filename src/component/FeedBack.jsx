import React from "react";
import axios from "axios";
import './styles/form.css'
import { useState } from 'react'
import './styles/btn.css'

function FeedBack(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://feedbackrestapi-production.up.railway.app/setdata', formData)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(error => {
            console.error(error);
          });
      };

    return(
        <div className="wrapper">

        
<div id="feedback" className="container">
        <div className="section animated bounceInLeft">
            <div className="brandname">
                <h3>FeedBack</h3>
                <ul>
                    <li> +251 940617356</li>
                    <li>thelastalemayehu@gmail.com</li>
                    <li>alexog.netlify.app</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Email Me</h3>
                <form className="">
                    <p>
                        <label htmlor="#">Name</label>
                        <input type="text" name="name"/>
                    </p>
                    <p>
                        <label htmlor="#">Email Address</label>
                        <input type="email" name="email"/>
                    </p>
                    <p className="full">
                        <label htmlor="#">Message</label>
                        <textarea name="message" cols="30" rows="5"></textarea>
                    </p>
                    <p className="full">
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
    </div>

    )
}

export default FeedBack