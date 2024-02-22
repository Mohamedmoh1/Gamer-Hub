const express = require('express')
const { AddProduct, GetProduct, DeleteProduct, UpdateProduct, GetOneProduct } = require('../Controllers/Product')


const productRouter = express.Router()

productRouter.post('/addProduct',AddProduct)

productRouter.get('/getProducts',GetProduct)

productRouter.delete('/deleteProduct/:id',DeleteProduct)

productRouter.put('/updateProduct/:id',UpdateProduct)

productRouter.get('/getOneProduct/:id',GetOneProduct)





module.exports = productRouter