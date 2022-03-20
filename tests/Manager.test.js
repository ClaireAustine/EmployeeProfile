const Manager = require ('../lib/Manager.js')

describe( "manager", () => {
    describe("get role", () => {
        it ("should return role", () => {
        const manager = new Manager ( 'Jane Doe', 356, 'email@email.com', '7')
        expect(manager.getRole()).toBe('Manager')
        })
    });
   
});