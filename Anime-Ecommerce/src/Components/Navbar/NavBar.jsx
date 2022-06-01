import React from 'react'
import './NavBar.css'
import {Search} from "@material-ui/icons"
import {ShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const NavBar = () => {

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

          <div className = "hamburger" onClick = {()=> handleClick()}>
            <i class= {state === true? "fas fa-times" : "fas fa-bars" } id = "bars"></i>
          </div>
          
          <div className = {state === true? "active-nav" : "nonactive-nav"}>
            <Link to = "/products" style={{ textDecoration: 'none', color: 'black' }} onClick = {()=> handleLink()}><h3 id = "Products">Products</h3></Link>
            <Link to = "/about"  style={{ textDecoration: 'none', color: 'black' }} onClick = {()=> handleLink()}><h3 id = "About">About</h3></Link>
            <Link to = "/contact"  style={{ textDecoration: 'none', color: 'black' }} onClick = {()=> handleLink()}><h3 id = "Contact">Contact</h3></Link>
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
          <Search id = "search"/>
          <input id = "input" size = "25" placeholder = "Search"/>
          <Link to = "/cart">
          <ShoppingCart id = "carticon" style = {{textDecoration: 'none', color: 'black'}}/>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar