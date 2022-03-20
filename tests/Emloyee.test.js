const Employee = require("../lib/Employee.js")

describe( "employee", () => {
    describe("get role", () => {
        it("should return role", () => {
        const employee = new Employee ( 'Jane Doe', 356, 'email@email.com')
        expect(employee.getRole()).toBe('Employee')
        })
    });
   
});