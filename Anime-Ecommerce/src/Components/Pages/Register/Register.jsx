import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className = "register-container">
        <h1 id = "register-heading">Create An Account</h1>
          <div className = "contact-wrapper">
            <input placeholder = "First Name" id = "first-name"></input>
            <input placeholder = "Last Name" id = "last-name"></input>
            <input placeholder = "Email" id = "email"></input>
            <input placeholder = "Phone Number" id = "phone-number"></input>
            <input placeholder = "Password" id = "password"></input>
            <input placeholder = "Confirm Password" id = "confirm-password"></input>
            <h5 id = "agreement">Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.</h5>
            <button id = "register-button">Create</button>
        </div>
    </div>
  )
}

export default Register