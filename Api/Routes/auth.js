const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken"); 

//REGISTER


router.post("/register", async (req,res)=>{
    
    // Checks if all fields are empty
    if(Object.keys(req.body.username).length === 0 || Object.keys(req.body.email).length === 0 || Object.keys(req.body.password).length === 0 ) {
        res.status(500).json("Please fill in all parts of the form")
        return;
    }

    // Checks for duplicate username
    const usernameCheck = await User.findOne({ username: req.body.username });
    if(usernameCheck){
        res.status(400).json("An Account with that username already exists, please choose a different one.");
        return;
    }

    // Checcks for duplicate email
    const emailCheck = await User.findOne({ email: req.body.email });
    if(emailCheck){
        res.status(400).json("An Account with that email already exists, please choose a different one.");
        return;
    }

    // creates new user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json("Error creating user, please try again or contact support")
    }
});


// LOGIN
router.post("/login", async (req,res) =>{
    try{
        //Checks if user exists
        const user = await User.findOne({ username: req.body.username });
        if(!user){
            res.status(401).json("Wrong Username!");
        } 
        //decrypts password and checks if it exists
        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        if(decodedPassword !== req.body.password){
            res.status(401).json("Wrong Password!");
        }

        const accessToken = jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SEC, 
            {expiresIn: "3d"}); 

        const { password, ...other } = user._doc;

        res.status(200).json({...other, accessToken});

    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;