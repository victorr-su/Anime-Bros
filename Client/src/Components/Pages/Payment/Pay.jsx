import React from 'react'
import "./Pay.css";
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';

const key = "pk_test_51LBJutJ4YPDEljAM5mXTpMJZHtrBCxAl9v8xE8Kaqq0wOwM1tVxwU67pBqEohpG2vPYMpH4RFtOczCqCHfRcuD0j00qeXAj0eY"

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) =>{
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest = async () =>{
      try{
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {tokenId: stripeToken.id, amount: 2000,}
          );
          console.log(res.data);
          navigate("/success")
      }catch(err){
        console.log(err);
      }
    };
    if(stripeToken){
      makeRequest();
    }
  }, [stripeToken, navigate]);

  return (
    <div className = "pay-wrapper">
      {stripeToken ? (<span>Processing. Please wait...</span>) : (
      <StripeCheckout
      name = "V & J Anime Store"
      image = "https://cdn3.iconfinder.com/data/icons/brands-applications/512/naruto-512.png"
      billingAddress
      shippingAddress
      description ='Your total is $20'
      amount = {2000}
      token = {onToken}
      stripeKey = {key}
      >
        <button id = "pay-button">Pay Now</button>
      </StripeCheckout>
      )}
    </div>
  )
}

export default Pay