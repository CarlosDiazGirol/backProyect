require('dotenv').config()


const express = require('express')
const dbConnection = require('./config/config')
const app = express()
const routes = require('./routes/products')
const PORT = process.env.PORT || 5000 //si no encuentra port en process.env conectara al 5000


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(` esta corriendo en http://localhost:${PORT}`)
})

dbConnection()

app.use('/', routes)
