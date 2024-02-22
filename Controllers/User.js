const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.SignUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : "Email already exists"}]})
        }

        const newUser = new User(req.body)

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashedPassword

        await newUser.save()

        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })

        res.status(200).send({msg : "User registred",newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not add user"}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : "Email not found"}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors: [{msg : "Wrong password"}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })

        res.status(200).send({msg : 'Connected',found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not connect"}]})
    }
}

exports.DeleteUser=async(req,res)=>{
    try {
        const {id} = req.params

        await User.findByIdAndDelete(id)

        res.status(200).send('User deleted')
    } catch (error) {
        res.status(500).send('Could not delete user')
    }
}

exports.UpdateUser=async(req,res)=>{
    try {
       

        await User.findByIdAndUpdate(req.user._id,{$set : req.body})

        res.status(200).send('User updated')
    } catch (error) {
        res.status(500).send('Could not update users')
    }
}

exports.getallUsers=async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({msg : 'we got all users',users})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get users"}]})
    }
} 

exports.getOneuser=async(req,res)=>{
    try {
        const {id} = req.params

        const user = await User.findById(id)

        res.status(200).send({Msg :"user not  found", user})
    } catch (error) {
        res.status(500).send('Could not get user')
    }
}

