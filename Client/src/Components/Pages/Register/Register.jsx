import React from 'react'
import "./Register.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useState } from 'react'; 

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleError = ()=>{
    if(firstName === "" || lastName === "" || email === "" || phone === "" || password === "" || confirmPassword === "" ){
      alert("Please fill out all fields.")
    }
    if( password !== confirmPassword){
      alert("Passwords are different.")
    }
  }
  return (
    <div className = "register-container">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
        <h1 id = "register-heading">Create An Account</h1>
          <div className = "contact-wrapper">
            <input placeholder = "First Name" id = "first-name" onChange = {(e)=> setFirstName(e.target.value)}></input>
            <input placeholder = "Last Name" id = "last-name" onChange = {(e)=> setLastName(e.target.value)}></input>
            <input placeholder = "Email" id = "email" onChange = {(e)=> setEmail(e.target.value)}></input>
            <input placeholder = "Phone Number" id = "phone-number" onChange = {(e)=> setPhone(e.target.value)}></input>
            <input placeholder = "Password" id = "password" onChange = {(e)=> setPassword(e.target.value)}></input>
            <input placeholder = "Confirm Password" id = "confirm-password" onChange = {(e)=> setConfirmPassword(e.target.value)}></input>
            <h5 id = "agreement">Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.</h5>
            <button id = "register-button" onClick = {handleError}>Create</button>
        </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Register