const router = require("express").Router();

const {peopleModel} = require("./mongoose")

router.get("/getallnames", (req, res) => peopleModel.find({}).then(results => res.send(results)).catch(err => next(err)));

//let names = ["spongebob", "patrick", "squidward"];

router.get("/getall", (req, res) => res.send(names)); 

router.use((req, res, next) => {
    console.log("request recieved at", new Date());
    return next();
})

router.get("/get/:id", (req, res, next) => {
    const {id} = req.params;
    if(id>=3)return next("id not found");
     res.send(names[id]);
})
router.get("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1))
});

module.exports = router;