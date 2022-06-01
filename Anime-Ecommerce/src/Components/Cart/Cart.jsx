import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import "./Cart.css"

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
`
const Cart = () => {
  return (
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

            <div className = "cartInfo">

              <div className = "productDetails">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" id = "shoe" alt = "shoe"/>
                <div className = "productSpecs">
                  <h3><b>Product: Nike freeruns</b></h3>
                  <h3><b>ID: 123456</b></h3>
                  <h3><b>Size: 9</b></h3>
                  <ProductColor color = "black"/>
                </div>
              </div>         

              <div className = "productPrice">
                <div className = "productAmountContainer">
                  <Add/>
                  <h3> 3 </h3>
                  <Remove/>
                </div>
                <h3 id = "cartPrice">$100</h3>
              </div>

            </div>

            <hr id = "line"/>

            <div className = "cartInfo">

              <div className = "productDetails">
                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" id = "shoe" alt = "shoe"/>
                <div className = "productSpecs">
                  <h3><b>Product: Nike freeruns</b></h3>
                  <h3><b>ID: 123456</b></h3>
                  <h3><b>Size: 9</b></h3>
                  <ProductColor color = "black"/>
                </div>
              </div>         

              <div className = "productPrice">
                <div className = "productAmountContainer">
                  <Add id = "productAmountAdd"/>
                  <h3 id = "proudctAmount"> 3 </h3>
                  <Remove id = "productRemoveAdd"/>
                </div>
                <h3 id = "cartPrice">$100</h3>
              </div>

            </div>

          </div>

          <div className = "cartSummary">
              <h2 style = {{margin: "0", padding:"0"}}>Order Summary</h2>

              <div className = "summaryItem">
                <h4 style = {{margin: 0}}>Subtotal:</h4>
                <h4 style = {{margin: 0}}>$50</h4>
              </div>

              <div className = "summaryItem">
                <h4 style = {{margin: 0}}>Estimated shipping:</h4>
                <h4 style = {{margin: 0}}>$5</h4>
              </div>

              <div className = "summaryItem">
                <h4 style = {{margin: 0}}>Discount:</h4>
                <h4 style = {{margin: 0}}>-$5.90</h4>
              </div>

              <div className = "summaryItem">
                <h1 id = "total" >Total:</h1>
                <h1>$100</h1>
              </div>

              <button id = "checkoutButton">Checkout Now</button>
          </div>

        </div>
    </div>
  )
}

export default Cart