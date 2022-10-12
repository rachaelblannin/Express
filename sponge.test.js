const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("./index");

describe("sponge tests", () => {
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
})