import React from 'react'
import "./Login.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';

const Login = () => {
  return (
    <div className = "login-container">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
        <h1 id = "login-header">Login</h1>
        <div className = "login-forms">
          <input id = "login-username" placeholder = "username/email"></input>
          <input id = "login-password" placeholder = "password"></input>
          <h5 id = "forget">Don't remember your password? Create a new account!</h5>
          <button id = "login-button">Login</button>
        </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Login