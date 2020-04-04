
const express = require("express");

const router= express.Router();
 


// @route       GET api/contacts 
// @desc        GET the data of  users
// @access      Private    
router.get('/',(req,res) =>{
    res.send('get the contacts');
})




// @route       POST api/contacts 
// @desc        Adding contact 
// @access      Private    
router.post('/',(req,res) =>{
    res.send('Add  contacts');
})



// @route       PUT api/contacts/:id
// @desc        Udating contact 
// @access      Private    
router.put('/:id',(req,res) =>{
    res.send('update  contacts');
})




// @route       DELETE api/contacts/:id
// @desc        Udating contact 
// @access      Private    
router.delete('/:id',(req,res) =>{
    res.send('delete  contacts');
})





module.exports = router;