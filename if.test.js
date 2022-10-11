const factorial = require ("./if.js");
const { expect } = require("chai");


describe("factorial tests", () => {
    it ("should equal 5", () => {
        expect(factorial(120)).to.equal(5);
    })
    it ("fails", () => {
        expect(factorial(5)).to.equal("none");
    })
})