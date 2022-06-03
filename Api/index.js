const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./Routes/user")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("db connection successful"))
    .catch((err)=>{console.log(err)})
    app.get("/api/test", ()=>{
        console.log("test is successful")
    })

app.use("/api/user", userRouter);

app.listen(process.env.PORT || 4000, (req,res) =>{
    console.log("server is running");
});
