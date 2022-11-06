import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import bookRouter from './routes/books.js'
import path from "path";



dotenv.config();

const app = express();

const url = process.env.URL;

mongoose.connect(url);

app.use(express.json());
app.use(express.urlencoded());

app.use(authRouter);
app.use(bookRouter)



app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
  console.log("geldi");
});



app.listen(3000, () => console.log("App listening"));
