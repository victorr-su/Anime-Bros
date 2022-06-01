import React from 'react'
import "./Newsletter.css";
import {Send} from '@material-ui/icons';


const Newsletter = () => {
  return (
      
    <div className = "newsContainer">
        <h1 id = "newsHeading"> Newsletter</h1>
        <h3 id = "newsCaption"> Get updates for your favourite products.</h3>
        <div className = "inputs">
            <input id = "emailInput" placeholder = "email"/>
            <button id = "sendButton">
                <Send/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter