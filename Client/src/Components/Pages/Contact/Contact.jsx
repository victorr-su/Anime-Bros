import React from 'react';
import "./Contact.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';

const Contact = () => {
  return (
    <div className = "contactContainer">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <h1 id = "contactHeading">Contact Us</h1>
      <h4 id = "contactDescription">Have any questions with your order? Enter your information below.</h4>
      <div className = "contactForms">
        <h4 id = "contactName">Name</h4>
        <input placeholder = "Name" id = "nameContact"/>
        <h4 id = "contactEmail">Email</h4>
        <input placeholder = "Email" id = "emailContact"/>
        <h4 id = "contactName">Message</h4>
        <textarea placeholder = "Type your concerns here" id = "textContact"/>
        <button id = "contact-button"> Submit</button>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Contact