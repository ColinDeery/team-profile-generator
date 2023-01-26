const Employee = require("../lib/Employee")

describe('Employee', () => {
    it('Should create a new instance of Employee', () => {
        const employee = new Employee()
        expect(employee).toBeInstanceOf(Employee)
    });
}); 