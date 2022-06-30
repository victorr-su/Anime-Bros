import React from 'react'
import "./Footer.css"
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from  "@fortawesome/free-brands-svg-icons";
import { faInstagram } from  "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Room } from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const BottomDisclaimer = () => {
  return (
    <div className = "footer">

        <div className = "leftSide">
          <h3 id = "footerTitle">AnimeBros</h3>
            <div className = "social">
              <p id = "desc">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected.
              </p>
              <div className = "socialIcons">
                <FontAwesomeIcon icon= {faFacebook} id = "facebook"/>
                <FontAwesomeIcon icon= {faInstagram} id = "insta"/>
                <FontAwesomeIcon icon= {faTiktok} id = "tiktok"/>
              </div>
            </div>
        </div>

        <div className = "center">
          <h3 id = "links">Useful Links</h3>
          <ul className = "list">
            <li id = "footerProduct"><Link to = "/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link></li>
            <li id = "footerAbout"><Link to = "/About" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
            <li id = "footerContact"><Link to = "/Contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
            <li>Cart</li>
            <li>Account</li>
            <li>FAQ</li>
            <li>Search</li>
            <li>Home</li>
          </ul>
        </div>

        <div className = "rightSide">
          <div className = "personalFooter">
            <h4 style = {{marginRight:"10px"}} id = "addressFooter"> <Room style = {{marginRight:"10px"}} id = "Room"/> 123 sesame street, markhan ON</h4>
            <h4 style = {{marginRight:"10px"}} id = "phoneFooter"> <Phone style = {{marginRight:"10px"}} id = "Phone"/> +1 234 56 78</h4>
            <h4 style = {{marginRight:"10px"}} id = "emailFooter"> <Mail style = {{marginRight:"10px"}} id = "Mail"/> su.victor21@gmail.com</h4>
          </div>
          <img src = "https://i.ibb.co/Qfvn4z6/payment.png" id = "payments" alt = "payment"/>
        </div>

        <div className = "bottom">
            <hr id = "line"></hr>
            <h5 id = "footerText">AnimeBros | Designed by Victor Su</h5>
        </div>

    </div>
  )
}

export default BottomDisclaimer