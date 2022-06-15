const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./Routes/user");
const authRouter = require("./Routes/auth");
const productRouter = require("./Routes/product");
const orderRouter = require("./Routes/order");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("db connection successful"))
    .catch((err)=>{console.log(err)})

// middleware
app.use(express.json())
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.listen(process.env.PORT || 5000, (req,res) =>{
    console.log("server is running");
});
