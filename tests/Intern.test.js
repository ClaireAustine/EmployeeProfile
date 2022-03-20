const Intern = require("../lib/Intern.js")

describe( "intern", () => {
    describe("get role", () => {
        it ("should return role", () => {
        const intern = new Intern ( 'Jane Doe', 356, 'email@email.com', 'University of Washington')
        expect(intern.getRole()).toBe('Intern')
        })
    });
   
});