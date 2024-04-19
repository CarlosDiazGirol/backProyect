const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

//router.get('/',(req,res)=>(res.send('lets go')))
router.post('/create',ProductController.create)

module.exports = router