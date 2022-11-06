import express from "express";
import Book from "../models/book.js";
import cloudinary from "cloudinary";
import path from "path";

const router = express.Router();

//book upload photo

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("invalide mimetype"));
    }
  };
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage, fileFilter });
  
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  router.get("/books", async (req, res) => {
    //all books
    const books = await Book.find();
    res.status(200).send(books);
  });
  
  router.post("/upload-book", upload.single("image"), async (req, res) => {
    const { name, author, price, type, description } = req.body;
  
    if (name && author && price && type && description) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path);
  
        const newBook = new Book({
          name,
          author,
          price,
          type,
          description,
          image: result.secure_url,
        });
  
        await newBook.save();
  
        console.log("yuklendi");
      } catch (error) {
        console.log(error);
      }
    }
  });

  export default router