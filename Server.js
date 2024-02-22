const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const productRouter = require('./Routes/Product')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/auth',userRouter)
app.use('/api/product',productRouter)

app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))