const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

//router.get('/',(req,res)=>(res.send('lets go')))
router.post('/create', ProductController.create)
router.get('/', ProductController.getAll)
router.get('/getAll', ProductController.getAllSSR)
router.get('/id/:_id', ProductController.getById)
router.delete('/id/:_id', ProductController.deleteProduct)

module.exports = router