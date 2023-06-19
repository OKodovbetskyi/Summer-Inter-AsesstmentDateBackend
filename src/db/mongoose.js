const mongoose = require('mongoose')
require('dotenv').config();
const connectionURL = process.env.MONGODB_URI;
mongoose.connect(connectionURL,{useNewUrlParser:true}).then((res)=>{
    console.log("Connected SUCCESSFULLY!")
}).catch(err=>{
    console.log('Error occured while connecting',err)
});
