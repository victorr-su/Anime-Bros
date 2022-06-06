import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className = "login-container">
      <h1 id = "login-header">Login</h1>
      <div className = "login-forms">
        <input id = "login-username" placeholder = "username/email"></input>
        <input id = "login-password" placeholder = "password"></input>
        <h5 id = "forget">Don't remember your password? Create a new account!</h5>
        <button id = "login-button">Login</button>
      </div>
    </div>
  )
}

export default Login