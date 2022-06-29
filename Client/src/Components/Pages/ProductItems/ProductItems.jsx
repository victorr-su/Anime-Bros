import React from 'react'
import styled from "styled-components";
import { Add, Remove } from '@material-ui/icons';
import { useState } from "react";
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useEffect } from 'react';
import { publicRequest } from '../../../requestMethods';
import { useLocation } from 'react-router-dom';
import "./ProductItems.css";
import { addProduct } from '../../../Redux/cartRedux';
import { useDispatch } from "react-redux";

const FilterColor = styled.div`
  display: ${(props) => props.color === "any" ? "none" : "flex"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid black;
`

const Bag = () => {
    //redux dispatch to use reducers
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    useEffect(()=>{
        const getProducts = async () =>{
            try{
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getProducts();
    }, [id])

    const decreaseQuantity = ()=>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const handleClick = () =>{
       dispatch(addProduct({product, quantity}));
    }
  return (
    <>
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
        <div className = "productItemContainer">
            <div className = "productImageContainer">
                <img src = {product.img} alt = "jeans" id = "productItemImage"/>
            </div>
    
            <div className = "productInfoContainer">
                <h1 id = "productItemTitle">{product.title}</h1>
                <p id = "productItemDescription">is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. 
                It has survived not only five centuries</p>
                <p id = "productItemPrice">$ {product.price}</p>
    
            <div className = "productItemFilterContainer">
                <div className = "colorFilter">
                    <h4 id = "productItemColor">Color</h4>
                    {product.color?.map((color)=>(
                        <FilterColor color = {color} key = {color} onClick = {()=> setColor(color)}/>
                    ))}
                </div>
    
                <div className = "sizeFilter"> 
                    <h4 id = "productItemSize">Size</h4>
                    <select className = "sizeSelector" onChange = {(e)=> setSize(e.target.value)}>
                        {product.size?.map((size)=>(
                            <option key = {size}>{size}</option>
                        ))}
                    </select>
                </div>
            </div>
    
                <div className = "addContainer">
                    <span id = "Amount">
                    <Remove id = "remove" onClick = {decreaseQuantity}/>
                    {quantity}
                    <Add id = "add" onClick= {()=>setQuantity(quantity+1)}/>
                    </span>
                    <button id = "cartAdd" onClick = {handleClick}>
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

export default Bag