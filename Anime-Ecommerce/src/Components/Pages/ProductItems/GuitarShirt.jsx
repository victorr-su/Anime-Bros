import React from 'react'
import "./ProductItems.css"
import styled from "styled-components";
import { Add, Remove } from '@material-ui/icons';

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
  return (
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
            <Remove id = "remove"/>
            1
            <Add id = "add"/>
          </span>
          <button id = "cartAdd">
            Add to Cart
          </button>
        </div>

       </div>
    </div>
  )
}

export default GuitarShirt