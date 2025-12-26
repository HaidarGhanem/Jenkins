require('dotenv').config()
const express = require('express')
const { connectDB } = require('./config/db')

const app = express()
const PORT = process.env.PORT || 3000 

connectDB()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', require('./routes/profile'))

app.listen(PORT,()=>{
    console.log(`Server is Running on  http://localhost:${PORT}`)
})