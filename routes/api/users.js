const express = require('express')
const router = express.Router()
const { check, validationResult} = require('express-validator/check')

const User = require('../../models/User')

router.post('/', [
 check('name', 'Name is required')
 .not()
 .isEmpty() ,
 check('email', 'Please include a valid email').isEmail(),
 check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
    
],
 async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
    //Check if the user exists
    const{name, email, password} = req.body
    //Get gravatar

    //Enctrypt Pword

    //Return JsonWebToken 
    res.send('Users route')

    }catch(err){
      console.error(err.message)
      res.status(500).send('server error')
    }
})

module.exports = router