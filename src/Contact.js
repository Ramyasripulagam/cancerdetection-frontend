import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='body'>
      <div className="contact-container">
        {/* Back Button */}
        <button className="back-button" onClick={() => window.history.back()}>← Back</button>
        
        <div className="contact-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReL8Mg-cMwjdBJGe27qqJHZL5Ouk7-gwD50g&s" alt="logo" />
          <h1>Contact us</h1>
          <p>
            Need to get in touch with us? Either fill out the form with your inquiry or
            find the <a href="/contact">cancerdetection@gmail.com</a> you'd like to contact below.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First name*" required />
            <input type="text" name="lastName" placeholder="Last name" />
          </div>
          <input type="email" name="email" placeholder="Email*" required />
          <textarea
            name="message"
            placeholder="What can we help you with?"
            rows="4"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
