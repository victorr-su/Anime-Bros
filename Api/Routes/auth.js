const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER


router.post("/register", async (req,res)=>{
    
    if(Object.keys(req.body.username).length ===0 || Object.keys(req.body.email).length ===0 || Object.keys(req.body.password).length ===0 ) {
        res.status(500)
        res.send("Please fill in all parts of the form")
    }

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err)
    }
});

// LOGIN
router.post("/login", async (req,res) =>{
    try{
        const user = await new User.findOne({
                username: req.body.username,
                password: req.body.password
            })
    }catch(err){
        res.status(500),json(err)
    }
});



module.exports = router;