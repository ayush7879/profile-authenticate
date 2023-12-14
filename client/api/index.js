import express from "express";
const app=express();
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server is working on port 3000");
})