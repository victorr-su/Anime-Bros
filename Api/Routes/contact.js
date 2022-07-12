const Contact = require("../models/Contact");
const router = require("express").Router();

// CREATE CONTACT INFO TO DB
router.post("/", async (req,res)=>{
    const newContact = new Contact(req.body);
    try{
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;