
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
// @desc        GET the data of  users contact (fetching the contact)
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
router.post('/',
 [auth , 
   [
    
    check('name','Name is required').not().isEmpty()

   ] 
],async (req,res) =>{
 
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        
        return res.status(400).json({ errors:errors.array()});
    }

    //destructring pulling out the name ,email,phone and type from body
    const {name,email,phone,type} = req.body;

    try {
        const newContact = new Contact({
            name : name,
            email : email,
            phone : phone,
            type : type,
            user: req.user.id   
        });

        const contact = await newContact.save();
        
        res.json(contact);


    } catch (err) {

        console.error(err.message);

        res.status(500).send('server error')
        
    }
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