const { middleChar } = require("../src/index");

test("should return false if the string length is not between 0 and 1000", () => {
    expect(middleChar()).toBe(false)
});

test("should return 't' if string is 'testing'", () => {
    expect(middleChar('testing')).toBe('t')
});

test("should return 'es' if string is 'test'", () => {
    expect(middleChar('test')).toBe('es')
});

test("should return 'dd' if string is 'middle'", () => {
    expect(middleChar('middle')).toBe('dd')
});