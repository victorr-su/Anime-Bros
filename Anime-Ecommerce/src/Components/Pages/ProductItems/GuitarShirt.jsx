import React from 'react'
import "./ProductItems.css"
import styled from "styled-components";
import { useState } from "react";
import { Add, Remove } from '@material-ui/icons';
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';

const FilterColor = styled.div`
  display:flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
  margin: 0 5px;
  cursor: pointer;
`
const GuitarShirt = () => {
  const [value, setValue] = useState(1);

  const decreaseValue = ()=>{
      if(value > 1){
          setValue(value - 1)
      }
  }
  return (
    <>
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <div className = "productItemContainer">

        <div className = "productImageContainer">
          <img src = "https://i.ibb.co/S6qMxwr/jean.jpg" alt = "jeans" id = "productItemImage"/>
        </div>

        <div className = "productInfoContainer">
          <h1 id = "productItemTitle">Title</h1>
          <p id = "productItemDescription">is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book. 
          It has survived not only five centuries</p>
          <p id = "productItemPrice">$20</p>

          <div className = "productItemFilterContainer">
            <div className = "colorFilter">
              <h4 id = "productItemColor">Color</h4>
              <FilterColor color = "black"/>
              <FilterColor color = "blue"/>
              <FilterColor color = "red"/>
            </div>

            <div className = "sizeFilter"> 
              <h4 id = "productItemSize">Size</h4>
              <select className = "sizeSelector">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>

          <div className = "addContainer">
            <span id = "Amount">
              <Remove id = "remove" onClick = {decreaseValue}/>
              {value}
              <Add id = "add" onClick= {()=>setValue(value+1)}/>
            </span>
            <button id = "cartAdd">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default GuitarShirt