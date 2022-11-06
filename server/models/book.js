import mongoose from "mongoose";
import crypto from 'crypto'

const BookSchema=mongoose.Schema({
    name:String,
    price:String,
    author:String,
    description:String,
    image:String,
    type:String
    

})

const BookModel=mongoose.model('books',BookSchema)

export default BookModel;