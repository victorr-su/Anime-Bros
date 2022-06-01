const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
    )
    .then(()=>console.log("db connection successful"))
    .catch((err)=>{console.log(err)})

app.listen(4000, () =>{
    console.log("hi");
});
