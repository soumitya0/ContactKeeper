
const express = require("express");

const router= express.Router();
 


// @route       GET api/auth
// @desc        get logged in user
// @access      Private  

router.get('/',(req,res) =>{
    res.send('get logged in  User');
})



// @route       POST api/auth
// @desc        Auth user and get token  (LOGIN USER) 
// @access      Public  

router.post('/',(req,res) =>{
    res.send('Log in user ');
})



module.exports = router;