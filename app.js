const express = require('express')
const mongoose = require('mongoose')
const Book = require('./model/Books.js')



const app = express()
const port = 3003
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello World')
})

const main = async()=>{
    await mongoose.connect('mongodb+srv://achuarjun138:5YRcfjgqsLf3Fm0x@cluster0.4i0cc.mongodb.net/Entri-e54')
}

main()
.then(()=>console.log('DB Connected Successfully'))
.catch(err=>console.log(err))


//create Book

app.post('/books',async(req,res)=>{
    try {
        if(Array.isArray(req.body)){
            const books = await Book.insertMany(req.body)
            res.status(201).json(books)
        }
        else
          {  
            const book = new Book(req.body)
            await book.save()
            res.status(201).json(book)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.post('/books',async(req,res)=>{
    try {
        const book = new Book.insertMany(req.body)
        await book.save()
        res.status(201).json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//Get All Books

app.get('/books',async(req,res)=>{
    try {
        const books = await Book.find()
        res.status(201).json(books)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.get('/books/:id',async(req,res)=>{
    try {
        const bookID= req.params.id
        const book= await Book.findById(bookID)
        if (!book) {
            return res.status(404).json({message:'Product not found'})
        } else {
            res.status(200).json(book)
        }
    } catch (error) {
        
    }
})


app.listen(port,()=>{
    console.log(`Server Started : http://localhost:${port}`);
    
})