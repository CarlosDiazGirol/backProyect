const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.getAll)
router.get('/getAll', ProductController.getAllSSR)
router.get('/id/:_id', ProductController.getById)

router.post('/create', ProductController.create)

router.delete('/id/:_id', ProductController.deleteProduct)

router.put('/update/:_id', ProductController.updateProduct)

module.exports = router