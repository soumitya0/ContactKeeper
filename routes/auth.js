
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




// @route       GET api/auth
// @desc        get logged in user
// @access      Private  

router.get('/',(req,res) =>{
    res.send('get logged in  User');
}) 












// @route       POST api/auth
// @desc        Auth user and get token  (LOGIN USER)  LOGIN 
// @access      Public  

router.post('/',[

    check('email' , 'Please include Valid Email ').isEmail(),
    check('password', 'Password is required ').exists()

], async (req,res) =>{
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        
        return res.status(400).json({ errors:errors.array()});
    }
    
        //destructring pulling out the email password from body
        const {email,password} = req.body;

        try {
            let user = await User.findOne({email})    //User is a collection in MongoDb


            if(!user){
                return res.status(400).json ({msg :'Invalid credentials'});  //email matching 
            }

            //Now we are comparing the bcryp hashing Password with login Password 

            const isMatchPassword = await bcrypt.compare(password , user.password);

            if(!isMatchPassword){
                return res.status(400).json({msg:"Invalid credentials"})   //password matching 
            }

            // if is match then send the JWT token that have id 
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


        } catch (err) {
            
            console.error(err.message);
            res.status(500).send('server error')
        }

})





module.exports = router;