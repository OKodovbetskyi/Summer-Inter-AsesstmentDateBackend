const mongoose = require('mongoose')
const validator = require('Validator')
const moduleSchema = new mongoose.Schema(
    {
     name:{
        type: String,
        require: true,
     },
     code:{
        type: String,
        validate(value) {
            if(value.lenght < 6){
                throw new Error("Module code should be more than 6 characters")
            }
        }
     },
    
    }
)
const Module = mongoose.model('Module',moduleSchema)
module.exports = Module;