import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();

const url = process.env.URL;

mongoose.connect(url);

app.use(express.json());

app.use(authRouter);

app.get("/",(req,res)=>{
    res.send("ok")
    console.log('geldi');
})

app.listen(3000, () => console.log("App listening"));
