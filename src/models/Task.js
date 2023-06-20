const mongoose = require('mongoose')
const validator = require('Validator')
const taskSchema = new mongoose.Schema(
    {
     name:{
        type: String,
        require: true,
     },
     setdate:{
        type:String
     },
     duedate:{
        type:String,
     },
     finaldeadline:{
        type:String,
    },
     modulecode:{
        type:String,
        require:true,
        validate(value){
           
            if (value.length<6 || value.length>6 ){
                console.log('validation>>>>>>>>>>>>>>>>>>>>>', value)
                throw new Error("Module code is invalid")
            }
        }
     },
     users: [],
    }
)
const Task = mongoose.model('Task',taskSchema)
module.exports = Task;



