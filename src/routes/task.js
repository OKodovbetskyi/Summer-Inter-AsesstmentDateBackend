const router = require('express').Router();
const Task = require('../models/Task');

router.get('/api/tasks', async (req,res)=>{
    Task.find({}).then((task)=>{
        res.status(201).send(task)
    }).catch(err=>{
        res.status(404).send(err)
    })
})
router.get('/api/tasks/:modulecode', async (req,res)=>{
    const modulecode = req.params.modulecode;
    Task.find({modulecode: modulecode}).then((task)=>{
        res.status(201).send(task)
    }).catch(err=>{
        res.status(404).send(err)
    })
})
router.post('/api/tasks', async (req,res)=>{
    const task = new Task(req.body);
    task.save().then(async ()=>{
        res.status(200).send(task);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


module.exports = router;