import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from "../../Redux/apiCalls"
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, { username, password})
    }

  return (
    <div style = {{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection:"column"}}>
        <input type = "text" placeholder='Username' onChange = {(e)=> setUsername(e.target.value)} style = {{padding: "10px", marginBottom: "20px"}}></input>
        <input type = "text" placeholder='Password' onChange = {(e)=> setPassword(e.target.value)} style = {{padding: "10px", marginBottom: "20px"}}></input>
        <button onClick = {handleClick} style = {{padding: "10px", width: "100px"}}> Login </button>
    </div>
  )
}

export default Login