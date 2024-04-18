require('dotenv').config()


const express = require('express')
const dbConnection = require('./config/config')
const app = express()

const PORT= process.env.PORT || 5000 //si no encuentra port en process.env conectara al 5000

app.get('/',(req,res)=>(res.send('hola')))

app.listen(PORT,()=>{
    console.log(` esta corriendo en http://localhost:${PORT}`)
})

dbConnection()