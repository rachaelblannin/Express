const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");
const { peopleModel } = require("./db");
chai.use(chaiHttp);

const server = require("./index");

describe("sponge tests", () => {

    let testSponge;

    beforeEach(async () => {
        try {
            await peopleModel.deleteMany({});
            testSponge = await peopleModel.create({
                name: "Squidward",
                species: "squid",
                colour: "blue"
            });
            testSponge = JSON.parse(JSON.stringify(testSponge));
            console.log();
        } catch (err) {
            console.error(err)
        }
    })

    it("should create a new sponge", (done) => {
        const newPerson = {
            "name": "patrick",
            "species": "starfish",
            "colour": "pink"
        }


        chai.request(server).post("/person/create/").send(newPerson).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newPerson);
            done();
        })

    })

    // after((done) => mongoose.disconnect(() => done()));
})

