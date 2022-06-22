import React from 'react'
import { products } from '../../../data'
import "./Products.css"
import { Link } from 'react-router-dom';
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';


const Products = () => {
  return (
    <div className = "container">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <h1 id = "productHeading">Products</h1>
      <div className = "filterSection">

          <div className = "filterProducts">
          <h3 id = "filter">Filter Products: </h3>
            <select id = "colorSelect">
              <option disabled>color</option>
              <option>black</option>
              <option>white</option>
              <option>yellow</option>
              <option>other</option>
            </select>
            <select id = "sizeSelect">
              <option disabled>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div className = "sortProducts">
            <h3 id = "sort">Sort Products: </h3>
            <select id = "productSelect">
              <option> Newest </option>
              <option> Price (low to high) </option>
              <option> Price (high to low) </option>
            </select>
          </div>
          
      </div>
      <div className = "productContainer">
        {products.map(item =>(
          <Link to = {"/products/" + item.component}>
          <div className = "imageContainer">   
                <img src = {item.img} key = {item.id} alt = "none" id = "productImage"/>
              <div className = "icons">
              </div>
          </div>
          </Link>
        ))}
      </div>
      <Newsletter/>
      <Footer/>
    </div>

  )
}

export default Products