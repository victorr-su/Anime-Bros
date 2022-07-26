import React from 'react';
import "./Contact.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useState } from "react";
import { publicRequest } from '../../../requestMethods';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);


  const handleContact = async () =>{
    try{
      const res = await publicRequest.post("/contact",{
        name: name,
        email: email,
        message: message
      });
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
      setShowMessage(true);
    }catch(err){
      alert("Please fill out all sections");
    }
  }

  return (
    <div className = "contactContainer">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <h1 id = "contactHeading">Contact Us</h1>
      <h4 id = "contactDescription">Have any questions with your order? Enter your information below.</h4>
      <div className = "contactForms">
        <h4 id = "contactName">Name</h4>
        <input placeholder = "Name" id = "nameContact" onChange = {(e)=> setName(e.target.value)} value = {name}/>
        <h4 id = "contactEmail">Email</h4>
        <input placeholder = "Email" id = "emailContact" onChange = {(e)=> setEmail(e.target.value)} value = {email}/>
        <h4 id = "contactName">Message</h4>
        <textarea placeholder = "Type your concerns here" id = "textContact" onChange = {(e)=> setMessage(e.target.value)} value = {message}/>
        <h4 id = "thank-you" style = {{display: showMessage === true ? "block" : "none"}}>Thank you for your submission. We will be in contact with you shortly.</h4>
        <button id = "contact-button" onClick = {handleContact}> Submit</button>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Contact