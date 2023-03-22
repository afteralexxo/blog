import React from "react";
import axios from "axios";
import './styles/form.css'
import { useState, useEffect } from 'react'
import './styles/btn.css'

function FeedBack() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name == '' || email == '' || feedback == '') {

      setIsSubmitted(false);

      if (name == '') {
        setMessage('fill the name properly')
      } if (email == '') {
        setMessage('fill the email properly');

      } if (feedback == '') {
        setMessage('fill the feedback properly');
      }

    } else {

      const data = { name, email, feedback };
      setLoading(true)
      await axios.post('https://fair-gray-goat-gown.cyclic.app/setdata', data)
        .then(res => {
          if (res.data) {
            setIsSubmitted(true);
            setLoading(false)
            setMessage(`Dear ${data.name} thank you for the feedback`)
            setName('')
            setEmail('')
            setFeedback('')
            console.log('success');
          }
          else {
            setMessage(`${data.name} check your form and fill properly`)
            setLoading(false)
            setIsSubmitted(false);
            console.log('error');
          }
        })
        .catch(error => {
          console.error(error);
        });
    };
  }


  return (
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
                  onChange={(event) => setName(event.target.value)} name="name" />
              </p>
              <p >
                <label htmlor="#">Email Address</label>
                <input type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)} name="email" />
              </p>
              <p className="full">
                <label htmlor="#">Message</label>
                <textarea id="feedback"
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)} name="message" cols="30" rows="5"></textarea>
              </p>
              {isSubmitted === true && <div className="success-message full">{message}</div>}
              {isSubmitted === false && <div className="error-message full">{message}</div>}
              <p className="full">
                {loading ? <div class="loader">
                  <span>L</span>
                  <span>O</span>
                  <span>A</span>
                  <span>D</span>
                  <span>I</span>
                  <span>N</span>
                  <span>G</span>
                </div> :
                  <button>Submit</button>}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FeedBack