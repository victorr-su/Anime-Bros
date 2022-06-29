import React from 'react'
import './NavBar.css'
import {ShoppingCartOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const quantity = useSelector(state=>state.cart.quantity);

  const [state, setState] = useState(false);
  const [linkClick, setLinkClick] = useState(false);

  const handleClick = () =>{
    setState(!state);
    
  }

  const handleLink = () =>{
    setLinkClick(true);
    if(linkClick === true){
      setState(!state);
    }
  }

  return (
    <div className = "navContainer">
      <div className = "NavigationBar">

        <div className = "headers">

          <div className = "hamburger" onClick = {handleClick}>
            <i className = {state === true? "fas fa-times" : "fas fa-bars" } id = "bars"></i>
          </div>
          
          <div className = {state === true? "active-nav" : "nonactive-nav"}>
            <Link to = "/products" style={{ textDecoration: 'none', color: 'black' }} onClick = {()=> handleLink()}><h3 id = "Products">Products</h3></Link>
            <Link to = "/about"  style={{ textDecoration: 'none', color: 'black' }} onClick = {()=> handleLink()}><h3 id = "About">About</h3></Link>
            <Link to = "/contact"  style={{ textDecoration: 'none', color: 'black' }} onClick = {()=> handleLink()}><h3 id = "Contact">Contact</h3></Link>
            <div className = "nonactive-login">
              <Link to = "/register" style={{ textDecoration: 'none', color: 'black'}} onClick = {()=> handleLink()}><h3 id = "register"> Register</h3></Link>
              <Link to = "/login" style={{ textDecoration: 'none', color: 'black'}} onClick = {()=> handleLink()}><h3 id = "login"> Login</h3></Link>
            </div>
          </div>
        </div>

        <div className = "titleContainer">
          <Link to = "/" style={{ textDecoration: 'none', color: 'black', marginTop: 5}}>
          <img src = "https://cdn3.iconfinder.com/data/icons/brands-applications/512/naruto-512.png" id = "naruto" alt = "error"/>
          </Link>
          <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
            <h2 id = "title">V & J Anime Store</h2>
          </Link>
        </div>

        <div className = "cart">
          <div className = "active-login">
              <Link to = "/register" style={{ textDecoration: 'none', color: 'black'}} onClick = {()=> handleLink()}><h3 id = "register"> Register</h3></Link>
              <Link to = "/login" style={{ textDecoration: 'none', color: 'black'}} onClick = {()=> handleLink()}><h3 id = "login"> Login</h3></Link>
          </div>
          <Link to = "/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined id = "carticon" style = {{textDecoration: 'none', color: 'black'}}/>
            </Badge>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar