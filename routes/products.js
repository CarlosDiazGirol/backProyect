const express = require('express')
const router = express.Router()
const Products = require ('../models/Product')

router.get('/',(req,res)=>(
    res.send('lets go')
)
)

module.exports = router