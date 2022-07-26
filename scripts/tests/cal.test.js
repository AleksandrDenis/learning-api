
const addition = require("../calc");

describe("Calculetor", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });

    });

    describe("Substraction function", () => {

    });

    describe("Multiplycation function", () => {

    });

    describe("Division function", () => {

    });
})