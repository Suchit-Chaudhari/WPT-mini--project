import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div id="contact-us"> 
      <h1>CONTACT US</h1>
      <form className="inputs">
        <input type="text" placeholder="Enter your name" />
        <input type="tel" placeholder="Enter your mobile number" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message" ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;