
const express = require("express");

const router= express.Router();
 

//express validator
const { check, validationResult } = require('express-validator');


//Schema 
const User = require('../models/User')


//bycrypt
const bcrypt = require('bcryptjs');


//JWT       when a user Register or Signup we want a spical TOKEN than gone a have PAYLOAD(palyLOad is the data that we want to send ) in it 
const JWT = require("jsonwebtoken");


//config
const config = require('config');



// @route       POST api/user
// @desc        Register User
// @access      public    

router.post(
    '/',
    [
        check('name','Please add Name ').not().isEmpty(),
        check('email','Please include a valid email ').isEmail(),
        check('password' ,'Please enter a password with 6+ character').isLength({min:6})
    ],
     async (req,res) =>{
    //res.send('register User');

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        
        return res.status(400).json({ errors:errors.array()});
    }


    //destructring pulling out the name id and password from body
    const {name,email,password} = req.body;

    // now we will check with the user With same Email the send erroe
    try{

        let user  = await User.findOne({email : email })

        if(user){

            return res.status(400).json({msg : 'User Already exists'});
        }   

        user = new User({     // not find same email the creating a new User using User Modules
            name : name,
            email : email,
            password : password     
        });

        //Now we will Incrypt the Password before storing the User Instance

        //Step-1 Bcrypt
        const salt = await bcrypt.genSalt(10);

        //Step-2 Bcrypt
        //hashing password
        user.password = await bcrypt.hash(password, salt);

        
        //Step-3 Bcrypt
        await user.save();


        //res.send('User Save'); 
         // this is responsev that when user Register without and  error
        // but we don't want this we will create a PAYLOAD and add to JWT

        //JWT 
        //step-1(JWT)
        const PAYLOAD = {
            user:{
                id: user.id     // with this user id we can get all the data realed to user
            }
        }
        //step-2(JWT) (genereating token)
        //jwt.sign() method takes a payload and the secret key defined in config.js  and 
        JWT.sign( PAYLOAD , config.get('jwtSecret') ,{
            expiresIn: 360000
        },(err, token)=>{
            if(err) throw err

            res.json({token})
        });


    }catch(err){

        console.error(err.message);
        res.status(500).send('server Error');
    }


    },
);



module.exports = router;




// router.post('/',(req,res) =>{
//     //res.send('register User');

//     res.send(req.body);


// })




