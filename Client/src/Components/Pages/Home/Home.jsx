import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import { ArrowBack } from '@material-ui/icons'
import { ArrowForward } from '@material-ui/icons'
import { useState } from "react";
import { categories, sliderItems } from '../../../data';
import styled from "styled-components";
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(${props=>props.slideIndex * -100 }vw);
  transition: 1s ease-in-out;
`

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = sliderItems.length;

  const nextSlide = ()=>{
    setSlideIndex(slideIndex === length -1 ? 0 : slideIndex +1);
  }
  const prevSlide = () =>{
    setSlideIndex(slideIndex === 0 ? length-1 : slideIndex -1);
  }
  return (
    <div className = "homePage">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <h1 id = "featured">Featured Items</h1>
      <div className = "sliderContainer">
        <ArrowBack id = "back" onClick = {()=> prevSlide()}/>
        {sliderItems.map((item,index) =>(
          <Wrapper slideIndex = {slideIndex} key = {index}>
                <div className = "slide">
                    <div className = "img">
                      <img src = {item.img} alt = "error" key = {item.id} id = "sliderImg"/>
                    </div>
                    <div className = "info">
                      <h1 id = "title1"> {item.title}</h1>
                      <p id = "text1"> {item.text}</p>
                      <Link to = {"/products"}>
                        <button id = "button1">Shop Now</button>
                      </Link>
                    </div>
                </div>
          </Wrapper>
        ))}
        <ArrowForward id = "forward" onClick = {()=> nextSlide()}/>
      </div>

      <div className = "hiddenButton">
        <Link to = "/products" style = {{textDecoration:"none"}}>
          <button id = "button2">Shop Now</button>
        </Link>
      </div>
      
      <h2 id = "categoryHeader">Most Popular Categories</h2>

      <div className = "Sections">
        {categories.map(item =>(
            <div className = "categoryContainer" key = {item.id}>
              <div className = "imageCateogry">
                <img src = {item.img} alt = "error" id = "image"/>
              </div>
              <div className = "titleCateogry">
              <h1 id = "categoryTitle">{item.title}</h1>
                <Link to = {"/products/" + item.cat}>
                <button id = "categoryButton">Shop now</button>
                </Link>
              </div>
            </div>
        ))}
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
export default Home