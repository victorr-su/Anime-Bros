const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe('sk_test_51LBJutJ4YPDEljAMMElgEKrKNtF2KJHJslzUSmhHVZjjZNmi2W5oPFGwJp2nL7h2wExpZO8oGV9RxiltzhI7dO7a00OLRZJSOR');

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "cad",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    } )
});
module.exports = router;