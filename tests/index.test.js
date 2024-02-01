const { middleChar } = require("../src/index");

test("should return false if the string length is not between 0 and 1000", () => {
    expect(middleChar()).toBe(false)
});