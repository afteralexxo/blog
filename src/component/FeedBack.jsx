import React from "react";
import axios from "axios";
import './styles/form.css'
import { useState, useEffect } from 'react'
import './styles/btn.css'

function FeedBack(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value
        });

      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = { name, email, feedback };
        const response = await axios.post('http://localhost:3000/setdata', data)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          console.error(error);
        });
    
        // if (response.ok) {
        //   alert('Feedback submitted successfully!');
        //   setName('');
        //   setEmail('');
        //   setFeedback('');
        // } else {
        //   alert('Failed to submit feedback');
        // }
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
                    <li><a href="https://alexog.netlify.app">Official Website</a> </li>
                </ul>
            </div>
            <div className="contact">
                <h3>Email Me</h3>
                <form onSubmit={handleSubmit}>
                    <p >
                        <label htmlor="#">Name</label>
                        <input type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)} name="name"/>
                    </p>
                    <p >
                        <label htmlor="#">Email Address</label>
                        <input type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} name="email"/>
                    </p>
                    <p className="full">
                        <label htmlor="#">Message</label>
                        <textarea  id="feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)} name="message" cols="30" rows="5"></textarea>
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