const Manager = require("../lib/Manager")

describe('Manager', () => {
    it('Shoudl create a new instance of Manager', () => {
        const manager = new Manager()
        expect(manager).toBeInstanceOf(Manager)
    });
}); 