import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Success.css"

const Success = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className = "success-wrapper">
        <button id = "success-button">Success !</button>
        <h4>Your order will be processed shorty. Keep an eye out for an email!</h4>
        <img src = "https://cdn3.iconfinder.com/data/icons/brands-applications/512/naruto-512.png" id = "naruto" alt = "error"/>
    </div>
  )
}

export default Success