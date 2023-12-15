import express from "express";
const app=express();
import mongoose from "mongoose";
import userroute from "./route/user.route.js"
import authroute from "./route/auth.route.js"
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is working on port 3000");
})
app.use('/api/user',userroute);
app.use('/api/auth',authroute);