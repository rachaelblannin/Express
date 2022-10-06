const express = require('express');
const app = express();
app.listen(4050);  

app.get("/", (req, res) => {
    res.send("hello my name is Rach");
});

const server = app.listen(() =>{
    console.log(`server started succesfully on port ${server.address().port}`);
})

let names = ["spongebob", "patrick", "squidward"];

app.get("/getall", (req, res) => res.send(names)); 

app.get("/get/:id", (req, res) => {
    const id = req.params.id;
     res.send(names[id])});

app.get("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1))});
    console.log(names);

const bodyParser = require("body-parser");
app.use(bodyParser.json());