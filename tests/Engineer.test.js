const Engineer = require('../lib/Engineer.js')

describe( "Engineer", () => {
    describe("get role", () => {
        it ("should return role", () => {
        const engineer = new Engineer ( 'Jane Doe', 356, 'email@email.com', 'github.com/github')
        expect(engineer.getRole()).toBe('Engineer')
        })
    });
   
});