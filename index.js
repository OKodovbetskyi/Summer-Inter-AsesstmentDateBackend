const express = require('express');
require('./src/db/mongoose');
const app = express();
const modulesRouter = require('./src/routes/module')
const PORT = 3000 || process.env.PORT;

//middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.method,"-->",req.path)
    next()
})

app.use(modulesRouter);
app.get("/", (req,res)=>res.send("This is the backend for Assignment Due Date application"))
app.listen(PORT, console.log("Server successfuly started!"))



