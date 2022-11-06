import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import Book from './models/book.js'
import User from './models/user.js'
import cloudinary from 'cloudinary'
import path from 'path'


// import upload from './utils/multer.js'
import multer from 'multer'

dotenv.config();


const app = express();

const url = process.env.URL;

mongoose.connect(url);

app.use(express.json());
app.use(express.urlencoded())

app.use(authRouter);


//book upload photo

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("invalide mimetype"));
    }
  };

const storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now()+path.extname(file.originalname));
      },
})

const upload=multer({storage,fileFilter})



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("index.html"))
    console.log('geldi');
})

app.get("/books",async(req,res)=>{
    //all books
    const books = await Book.find();
    res.status(200).send(books);

})

app.post("/upload-book", upload.single("image"), async (req, res) => {
    
   
    const {name,author,price,type,description,}=req.body
    

    console.log(req.file.path);
    res.send('ok')
    if(name&& author&& price&&type&&description){
        try {
            const result=await cloudinary.v2.uploader.upload(req.file.path)
            
            const newBook=new Book({
                name,
                author,
                price,
                type,
                description,
                image:result.secure_url
    
            })
    
            await newBook.save()
            
    
            
            console.log("yuklendi");
        } catch (error) {
            console.log(error);
        }
    }
  
    
  });

app.listen(3000, () => console.log("App listening"));
