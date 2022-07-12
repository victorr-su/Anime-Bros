import React from 'react'
import "./Login.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useState } from "react";
import { login } from '../../../Redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"

const Error = styled.span`
color: red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state)=> state.user)

  const handleClick = (e) =>{
    e.preventDefault();
    login(dispatch, {username, password});
  } 
  
  return (
    <div className = "login-container">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
        <h1 id = "login-header">Login</h1>
        <div className = "login-forms">
          <input id = "login-username" placeholder = "Username" onChange = { (e)=> setUsername(e.target.value)}></input>
          <input id = "login-password" type = "password" placeholder = "Password" onChange = { (e)=> setPassword(e.target.value)}></input>
          <h5 id = "forget">Don't remember your password? Create a new account!</h5>
          {error && <Error>Something went wrong...</Error>}
          <button id = "login-button" onClick = {handleClick} disabled = {isFetching}>
            Login
          </button>
        </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Login