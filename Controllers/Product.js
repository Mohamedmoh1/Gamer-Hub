const Product = require("../Models/Product")

exports.AddProduct=async(req,res)=>{
    try {

     

        const newProduct = new Product(req.body)

        await newProduct.save()

        res.status(200).send({Msg : "Product Added",newProduct})
    } catch (error) {
        res.status(500).send('Could not add Product')
    }
}

exports.GetProduct=async(req,res)=>{
    try {
        const products = await Product.find()

        res.status(200).send({Msg : "Product List",products})
    } catch (error) {
        res.status(500).send('Could not get products')
    }
}

exports.DeleteProduct=async(req,res)=>{
    try {
        const {id} = req.params

        await Product.findByIdAndDelete(id)

        res.status(200).send('Product deleted')
    } catch (error) {
        res.status(500).send('Could not delete products')
    }
}

exports.UpdateProduct=async(req,res)=>{
    try {
        const {id} = req.params

        await Product.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('Product updated')
    } catch (error) {
        res.status(500).send('Could not update products')
    }
}

exports.GetOneProduct=async(req,res)=>{
    try {
        const {id} = req.params

        const product = await Product.findById(id)

        res.status(200).send({Msg :"Product found", product})
    } catch (error) {
        res.status(500).send('Could not get product')
    }
}