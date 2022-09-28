const express = require('express');
require('./config')
const Student = require('./Student')
const app = express();
const connectToMongo = require*('./db')


app.use(express.json()) // req ma data ave tene json ma convert karva mate
app.post("/student",async(req, res)=>{
    let data = new Student(req.body)
    let result = await data.save()
    console.log(result)
    res.send("Done")
    console.log(req.body)
});

app.get("/listStudents",async(req, res)=>{
    let data = await Student.find();
    console.log(data);
    res.send(data);
});

app.delete("/student/:id", async(req, res)=>{
    console.log(req.params)
    let data = await Student.deleteOne(req.params);
    console.log(data)
    res.send(data)
});
app.put("/student/:id", async(req, res)=>{
    console.log(req.params)
    let data = await Student.updateOne(
        req.params,
        {$set: req.body}
    );
    res.send(data)
});
app.listen(8080) 