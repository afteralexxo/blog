import React from "react";
import axios from "axios";
import { useState } from 'react'

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
        <div className="feedback">

        <h1>Give me your feedback</h1>
        <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" placeholder="john doe" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="feedback" className="form-label">Example textarea</label>
        <textarea className="form-control" id="feedback" rows="3" onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
    </form>
      </div> 
    )
}

export default FeedBack