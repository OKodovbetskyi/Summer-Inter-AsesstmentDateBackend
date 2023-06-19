const router = require('express').Router();
const Module = require('../models/Modules');
router.get('/api/modules', async (req,res)=>{
    res.send(200);
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