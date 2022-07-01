import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import "./Cart.css"
import NavBar from '../../Navbar/NavBar';
import ScrollToTop from '../../ScrollToTop';
import Anouncement from '../../Navbar/Anouncement';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useState} from "react";
import { useEffect } from 'react';
import { userRequest } from '../../../requestMethods';
import { useNavigate } from 'react-router-dom';


const KEY = "pk_test_51LBJutJ4YPDEljAM5mXTpMJZHtrBCxAl9v8xE8Kaqq0wOwM1tVxwU67pBqEohpG2vPYMpH4RFtOczCqCHfRcuD0j00qeXAj0eY"

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "none" };
    color: ${(props) => props.type === "filled" && "white"};
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=>props.color};
  margin-top: 20px;
`
const Cart = () => {
  const cart = useSelector(state=> state.cart);

  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) =>{
    setStripeToken(token);
  }
  
  useEffect(()=>{
    const makeRequest =  async () =>{
      try{
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken,
          amount: cart.total * 100,
        })
        navigate('/success',{data: res.data})
      }catch(err){
        console.log(err)
      }
    }
    stripeToken && makeRequest();
  },[stripeToken, cart.total, navigate])
  return (
    <>
      <ScrollToTop/>
      <Anouncement/>
      <NavBar/>
    <div className = "cartWrapper">
        <h1 id = "cartTitle"> Your Bag</h1>

        <div className = "cartTop">
            <TopButton style = {{border: "none"}}>Continue Shopping</TopButton>
            <h4 id = "topText"> Shopping Bag (2) </h4>
            <h4 id = "topText">Your Wishlist (0)</h4>
            <TopButton type = "filled">Check Out Now</TopButton>
        </div>

        <div className = "cartBottom">
          
            <div className = "productCart">
              <h3 style = {{ padding: "20px 0px",textAlign: "center",display: cart.products.length === 0 ? "block" : "none"}}>Your cart is empty</h3>
            {cart.products.map((product)=>(
              <div className = "cartInfo">
                <div className = "productDetails">
                  <img src={product.img} id = "shoe" alt = "shoe"/>
                  <div className = "productSpecs">
                    <h3><b>{product.title}</b></h3>
                    <h6><b> Product ID: {product._id}</b></h6>
                    <h3><b>Size: {product.size}</b></h3>
                    <ProductColor color = {product.color}/>
                  </div>
                </div>         

                <div className = "productPrice">
                  <div className = "productAmountContainer">
                    <Add/>
                    <h3> {product.quantity} </h3>
                    <Remove/>
                  </div>
                  <h3 id = "cartPrice">$ {product.price*product.quantity}</h3>
                </div>

              </div>
              ))}

              <hr id = "line"/>
            </div>

          <div className = "cartSummary">
              <h2 style = {{margin: "0", padding:"0"}}>Order Summary</h2>

              <div className = "summaryItem">
                <h4 style = {{margin: 0}}>Subtotal:</h4>
                <h4 style = {{margin: 0}}>{cart.total}</h4>
              </div>

              <div className = "summaryItem">
                <h4 style = {{margin: 0}}>Estimated shipping:</h4>
                <h4 style = {{margin: 0}}>$F</h4>
              </div>

              <div className = "summaryItem">
                <h4 style = {{margin: 0}}>Discount:</h4>
                <h4 style = {{margin: 0}}>-$5.90</h4>
              </div>

              <div className = "summaryItem">
                <h1 id = "total" >Total:</h1>
                <h1>$100</h1>
              </div>
                <StripeCheckout
                name="AnimeBros"
                image="https://cdn3.iconfinder.com/data/icons/brands-applications/512/naruto-512.png"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
                >
                  <button id = "checkoutButton" style = {{cursor: "pointer"}}>Checkout Now</button>
                </StripeCheckout>
          </div>

        </div>
    </div>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Cart