const Product = require('../models/Product.js')

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body)
            res.status(201).send(product)
        } catch (error) {
            console.log(error)
        }
    },

    async getAll(req,res){
        try {
            const product = await Product.find()
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },

    async getAllSSR(req,res){
        try {
            const product = await Product.find()
            res.send(`
            <h1>todas las tareas</h1>
            ${product.map(product=>{
                return(`  
                    <div>
                        <h2>${product.title}</h2>
                        <p>${product.price}</p>
                        <p>${product.category}</p>
                    </div>
                `)
            }).join('')
        }
            `)
        } catch (error) {
            console.log(error)
        }
    },

    async getById(req,res){
        try {
            const id = req.params._id
            const product = await  Product.findById(id)
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    }




}

module.exports = ProductController