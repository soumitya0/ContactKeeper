const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = function(req, res, next){

        //getting the token from header

        const token = req.header('x-auth-token');   //x-auth-token is key that have value include jwt token
        console.log(token);

        //check if not token
        if(!token)
        {
             return res.status(401).json({msg:'no Token, authorization denied'});

        }   

            // verfing the token
        try {
            
            //this deCode have the payLoad this payload have the user ID
            const deCode = jwt.verify(token , config.get('jwtSecret'));

            //creating a objct in req with user 
            req.user = deCode.user;   
            // in playload data  we have a object user that contain id 
            //and this id is passed to req object that is re.user  
            //this req object  is user will assecc  by Route the GET method http://localhost:5000/api/auth 

            console.log('i am from auth middlewae folder '+req.user.id);

            next();

        } catch (err) {
            
            res.status(401).json({msg:"token is not valid"});
        }
        
}