const express = require('express');

const app = express();

const routes = require("./router");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello my name is Rach");
});

app.use((req, res, next) => {
    console.log("request recieved at", new Date());
    return next();
})

app.use("/person", routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(err || "error");
})





const server = app.listen(1045,() =>{
    console.log(`server started succesfully on port ${server.address().port}`);
})


module.exports = server;
