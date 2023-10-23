const {Component} = require("./Component");

describe("Component", ()=>{
    it("should throw an error if no input is detected",()=>{
        const newComp = new Component;

        expect(()=>{
            newComp.render()
        }).toThrow()
    })
});