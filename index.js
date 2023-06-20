const express = require('express');
require('./src/db/mongoose');
const app = express();
const modulesRouter = require('./src/routes/module')
const tasksRouter = require('./src/routes/task')
const fs = require('fs')
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.method,"-->",req.path)
    next()
})

app.use(modulesRouter);
app.use(tasksRouter);
app.get("/", (req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/html'})
    fs.readFile('./src/html/index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

app.listen(PORT, console.log("Server successfuly started!"))



