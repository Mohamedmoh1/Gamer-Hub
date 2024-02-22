const { body, validationResult } = require('express-validator')

exports.validationRegister = [
    body('password','Your password must contain min 8 char').isLength({min : 8}),
    body('email','Wrong email').isEmail()
]

exports.validationLogin = [
    body('password','Password incorrect').isLength({min : 8}),
    body('email','Wrg onemail').isEmail()
]

exports.Validation=(req,res,next)=>{
   const errors = validationResult(req)

   if(!errors.isEmpty()){
    return res.status(400).send(errors)
   }

   next()
}