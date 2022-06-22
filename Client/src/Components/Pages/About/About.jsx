import React from 'react'
import "./About.css";
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';

const About = () => {
  return (
    <div className = "aboutContainer">
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
      <h1 id = "aboutHeading">Who are we?</h1>
      <div className = "aboutContent">
        <img src = "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt = "naruto" id = "aboutPicture"/>
        <div className = "aboutTextBox">
          <p id = "aboutText"> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised 
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default About