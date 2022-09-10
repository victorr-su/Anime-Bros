import React from 'react'
import "./Register.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useState } from 'react'; 
import { publicRequest } from '../../../requestMethods';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [created, setCreated] = useState(false);

  const handleError = ()=>{
    if(username === "" || email === "" || phone === "" || password === "" || confirmPassword === "" ){
      alert("Please fill out all fields.")
    }
    if( password !== confirmPassword){
      alert("Passwords are different.")
    }
  }

  const handleClick = async ()=>{
    try{
      const res = await publicRequest.post("/auth/register",{
        username: username,
        email: email,
        password: password,
      })
      console.log(res.data);
      setCreated(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className = "register-container">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
        <h1 id = "register-heading">Create An Account</h1>
          <div className = "contact-wrapper">
            <input placeholder = "Username" id = "first-name" onChange = {(e)=> setUsername(e.target.value)}></input>
            <input placeholder = "Email" id = "email" onChange = {(e)=> setEmail(e.target.value)}></input>
            <input placeholder = "Phone Number" id = "phone-number" onChange = {(e)=> setPhone(e.target.value)}></input>
            <input placeholder = "Password" id = "password" onChange = {(e)=> setPassword(e.target.value)}  type = "password"></input>
            <input placeholder = "Confirm Password" id = "confirm-password" onChange = {(e)=> setConfirmPassword(e.target.value)} type = "password"></input>
            <h5 id = "agreement">Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.</h5>
            <h3 style = {{display: created? "block": "none"}}>Success! Your account has been created, please login now.</h3>
            <button id = "register-button" onClick={() => { handleClick(); handleError();}}>Create</button>
        </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Register