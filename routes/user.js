
const express = require("express");

const router= express.Router();
 

//express validator
const { check, validationResult } = require('express-validator');




//Schema 
const User = require('../models/User')


// @route       POST api/user
// @desc        Register User
// @access      public    

router.post('/', [
    check('name','Please add Name ').not().isEmpty(),
    check('email','Please include a valid email ').isEmail(),
    check('password' ,'Please enter a password with 6+ character').isLength({min:6})

    
] ,(req,res) =>{
    //res.send('register User');

    const errors = validationResult(req)
    
    if(! errors.isEmpty()){
        
        return res.status(400).json({ errors:errors.array()})
    }

    res.send('Passed');


})



module.exports = router;




// router.post('/',(req,res) =>{
//     //res.send('register User');

//     res.send(req.body);


// })