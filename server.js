const express= require('express');


const connectDB = require('./config/db');



const app = express();
const PORT=process.env.PORT || 5000;


//Connected DB 
connectDB();


app.get('/', (req,res) => res.json({
    msg:"welcome to the JSON RESPONSE"
}))


//define the Routes
app.use('/api/users',require('./routes/user'));   // when ever the user hit this endpoint then the check in this file
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contact',require('./routes/contact'));


app.listen(PORT , () =>{
    console.log(  `Server is running on  ${PORT} ` )
})