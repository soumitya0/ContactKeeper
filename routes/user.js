
const express = require("express");

const router= express.Router();
 


// @route       POST api/user
// @desc        Register User
// @access      public    
router.post('/',(req,res) =>{
    res.send('register User');
})



module.exports = router;