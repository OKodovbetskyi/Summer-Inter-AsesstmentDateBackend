const router = require('express').Router();
const Module = require('../models/Modules');
const Task = require('../models/Task');
router.get('/api/modules', async (req,res)=>{
    Module.find({}).then((module)=>{
        res.status(201).send(module)
    }).catch(err=>{
        res.status(404).send();
    })
})
router.post('/api/modules', async (req,res)=>{
    const module = new Module(req.body);
    
    module.save().then(async ()=>{
        res.status(200).send(module);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


module.exports = router;