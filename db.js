const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/spongebob", {
    useNewUrlParser: true
});

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    species: {
        type: String,
        require: true
    },
    colour: {
        type: String,
        require: true
    }
});

const peopleModel = mongoose.model("people", peopleSchema);

module.exports = {
    peopleModel
}