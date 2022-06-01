import React from 'react'
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

const Bag = () => {
  return (
    <div className = "productItemContainer">
    <div className = "productImageContainer">
        <img src = "https://lp2.hm.com/hmprod?hmver=1&set=quality%5B79%5D%2Csource%5B%2Fmodel%2F2017%2FE00+0289834+013+93+3741.jpg%5D%2Ctype%5BSTILLLIFE_FRONT%5D&call=url[file:/product/main]" alt = "jeans" id = "productItemImage"/>
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
            <FilterColor color = "grey"/>
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

export default Bag