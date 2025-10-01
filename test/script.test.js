const { addition } = require('../script.js');

test("adds 1 + 2 to equal 3", () => {
    expect(addition(1, 2)).toBe(3);
});