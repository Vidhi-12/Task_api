const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const Task = require('./model/Task');
const mongoose = require('mongoose');

const port = 8080;

// app.use(bodyParser, urlencoded({extended:false}));
// app.use(bodyParser.json);
app.use(express.json);

mongoose.connect('mongodb://localhost/task');

app.post('/v1/tasks', (req,res)=>{
    try{
        const task = Task.create({
            id:id++,
            title:req.body.title
        })


        res.json(201,{
            status: "success",
            id
        })
    }
    catch(e){
        res.json(404,{
            status:"failed",
            message: e.message
        })
    }


})

app.get('v1/tasks', (req,res) => {
    try{
        const task = Task.find();

        res.json(200,{
            status: "success",
            task
        })
    }
    catch(e){
        res.json(404,{
            status:"failed",
            message: e.message
        })
    }
})

app.get('v1/tasks/:id', (req,res) => {
    try{
        const task = Task.find({_id: req.query.id});

        res.json(200,{
            status: "success",
            task
        })
    }
    catch(e){
        res.json(404,{
            status:"failed",
            error: "There is no task at that id"
        })
    }
})

app.delete('v1/tasks/:id', (req,res) => {
    try{
        const task = Task.find({_id: req.query.id});

        res.json(204,{
            status: "success"
        })
    }
    catch(e){
        res.json(404,{
            status:"failed",
            message: e.message
        })
    }
})


app.put('v1/tasks/:id', (req,res) => {
    try{
        const task = Task.find({_id: req.query.id});

        res.json(204,{
            status: "success"
        })
    }
    catch(e){
        res.json(404,{
            status:"failed",
            error: "There is no task at that id"
        })
    }
})

app.listen(port, () => console.log("server is running"));