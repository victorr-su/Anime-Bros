const router = require("express").Router()
const Cart = require("../models/Cart");
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require("./verifyToken")

//CREATE
router.post("/", verifyToken ,async (req,res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAuth, async (req,res) =>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", verifyTokenAndAuth, async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200),json("Cart item has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
});

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuth, async (req,res)=>{
    try{
        const cart = await Cart.findOne( {userId: req.params.userId} )
        const { password, ...other } = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err)
    }
});

//GET ALL USER CARTS
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const userCarts = await Cart.find();
        res.status(200).json(userCarts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router