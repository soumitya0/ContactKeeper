const config = require('config');

const mongoose = require('mongoose');

const db = config.get('URL');


/************ without Aysnc ******** */
// const connectDB  = () => {

//     mongoose.connect(db, {
//         useNewUrlParser:true,
//         useCreateIndex: true,
//         useFindAndModify:false
//     }).then(()=>{console.log('MongoDb Connected')})
//     .catch(err => {
//         console.error(err.message);
//         process.exit(1)
//     })
// }


/************ with Aysnc ******** */
const connectDB  = async () => {

    try {
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useCreateIndex: true,
            useFindAndModify:false
        });

        console.log ('MongoDb connected ...')
    } catch (err) {

        console.error(err.message);
        process.exit(1)
        
    }
    
}


module.exports = connectDB;