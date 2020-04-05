
const express = require("express");

const router= express.Router();
 


//middle ware
const auth = require ('../middleWare/auth');


//express validator
const { check, validationResult } = require('express-validator');


//Schema UserSchema
const User = require('../models/User')

//Schema Contact Schema
const Contact = require('../models/contact')




// @route       GET api/contacts 
// @desc        GET the data of  users
// @access      Private    
router.get('/',auth ,async (req,res) =>{

    try {
        
        const contacts = await Contact.find({ user: req.user.id}).sort({date: -1})
        res.json(contacts)

    } catch (err) {

        console.log(err.message);
        res.status(500).send('server Error');

    }
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