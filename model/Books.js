const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
    genres:[String],
    isAvailable:{
        type:Boolean,
        default:true
    }
})

const Book = mongoose.model('Books',bookSchema);
module.exports = Book;