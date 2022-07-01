import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom';
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";


const Products = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("Newest");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // getting the products
  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")
        setProducts(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getProducts();
  }, [cat]);

  // filtering the products
  useEffect(()=>{
    setFilteredProducts(
      products.filter(item => Object.entries(filter).every(([key,value])=> 
        item[key].includes(value)))
    )
  },[cat,filter,products])

  // sort products
  useEffect(()=>{
    if(sort === "Newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Asc"){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.price- b.price)
      );
    } else if (sort === "Desc"){
      setFilteredProducts(prev =>
      [...prev].sort((a,b)=>b.price-a.price)
      );
    }
  },[sort])

  // takes the value of the event in filter
  const handleFilter = (e)=>{
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : value
    });
  }

  // takes the value of the event in sort
  const handleSort = (e) =>{
    setSort(e.target.value);
  }

  return (
    <div className = "container">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <h1 id = "productHeading">Products</h1>
      <div className = "filterSection">

          <div className = "filterProducts">
          <h3 id = "filter">Filter Products: </h3>
            <select id = "colorSelect" name = "color" onChange = {handleFilter}>
              <option disabled style = {{display: "none"}}>color</option>
              <option>any</option>
              <option>white</option>
              <option>grey</option>
              <option>beige</option>
            </select>
            <select id = "sizeSelect" name = "size" onChange = {handleFilter}>
              <option disabled style = {{display: "none"}}>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>One-size</option>
            </select>
          </div>

          <div className = "sortProducts">
            <h3 id = "sort">Sort Products: </h3>
            <select id = "productSelect" onChange = {handleSort}>
              <option value = "Newest"> Newest </option>
              <option value = "Asc"> Price (low to high) </option>
              <option value = "Desc"> Price (high to low) </option>
              
            </select>
          </div>
          
      </div>
      <div className = "productContainer">
        {filteredProducts.map(item =>(
          <Link to = {"/product/" + item._id}>
          <div className = "imageContainer">   
            <img src = {item.img} key = {item.id} alt = "none" id = "productImage"/>
          </div>
          </Link>
        ))
      }
      </div>
      <Newsletter/>
      <Footer/>
    </div>

  )
}

export default Products