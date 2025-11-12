import React from 'react'
import "./ContactUs.css";
import { SiKeeweb } from "react-icons/si";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { SiWebex } from "react-icons/si";



const ContactUs = () => {
  return (
        <section className="contact-section">
          <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Have a question, project idea, or just want to say hello?  
              Fill out the form below and we’ll get back to you soon.
            </p>
    
            <div className="contact-content">
              {/* Left: Info */}
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>You can reach us via our office, email, or social media links below.</p>
                <ul>
                  <li>123 Main Street, Calicut,</li>
                  <li>info@mybrand.com</li>
                  <li>+91 98765 43210</li>
                </ul>
                <div className="social-links">
                  <a href="#"><SiKeeweb />
                  </a>
                  <a href="#"><PiWebhooksLogoBold />
                  </a>
                  <a href="#"><SiWebex />
                  </a>
                </div>
              </div>
    
              {/* Right: Form */}
              <form className="contact-form">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
    
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
    
                <label>Message</label>
                <textarea rows="5" placeholder="Type your message..." required></textarea>
    
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          </section>
     );
};

export default ContactUs
