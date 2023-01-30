const Intern = require("../lib/Intern")

describe('Intern', () => {
    it('Should create a new instance of Intern', () => {
        const intern = new Intern()
        expect(intern).toBeInstanceOf(Intern)
    });
});