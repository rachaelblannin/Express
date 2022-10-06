const express = require('express');
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello my name is Rach");
});



let names = ["spongebob", "patrick", "squidward"];

app.get("/getall", (req, res) => res.send(names)); 

app.use((req, res, next) => {
    console.log("request recieved at", new Date());
    return next();
})

app.get("/get/:id", (req, res) => {
    const id = req.params.id;
     res.send(names[id]);
})
app.get("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1))
});
    

const server = app.listen(1045,() =>{
    console.log(`server started succesfully on port ${server.address().port}`);
})



