const mongoose = require('mongoose')
const validator = require('Validator')
const moduleSchema = new mongoose.Schema(
    {
     name:{
        type: String,
        require: true,
     },
     image_link:{
        type:String,
     },
     code:{
        type:String
     },
     level:{
        type:Number
     },
     moduleleader:{
        type:String
     }
    } 
)
const Module = mongoose.model('Module',moduleSchema)
module.exports = Module;



