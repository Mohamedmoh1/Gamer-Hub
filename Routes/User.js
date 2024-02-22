const express = require('express')
const { SignUp, SignIn, DeleteUser, UpdateUser, getallUsers, getOneuser, } = require('../Controllers/User')
const { validationRegister, Validation, validationLogin } = require('../Middlewares/Validation')
const { isAuth } = require('../Middlewares/isAuth')
const User = require('../Models/User')


const userRouter = express.Router()

userRouter.post('/SignUp',validationRegister,Validation,SignUp)


userRouter.post('/SignIn',validationLogin,Validation,SignIn)

userRouter.get('/ConnectedUser',isAuth,(req,res)=>{res.send(req.user)})

userRouter.delete('/deleteUser/:id',DeleteUser)

userRouter.put('/updateUser',isAuth,UpdateUser)

userRouter.get('/getallUsers', getallUsers) 

userRouter.get('/getOneuser/:id',getOneuser)



module.exports = userRouter
