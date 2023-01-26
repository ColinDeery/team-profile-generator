const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    it('Should create a new instance of Engineer', () => {
        const engineer = new Engineer()
        expect(engineer).toBeInstanceOf(Engineer)
    });
});