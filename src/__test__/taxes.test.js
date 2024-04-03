const { calculateTaxes } = require("../functions/taxes.js");

var money = 0;

// Before each and after each tests
beforeEach(() => {
    console.log("happens once before a test")
    // tax bracket for 500K is 31%
    money = 500000;
})

afterEach(() => {
    console.log("happens once after a test")
    // array should be cleared here
    money = 0;
})


test("check if tax calculation works on a single number", () => {
    let taxes = 0;
    taxes = calculateTaxes(money);
    expect(taxes).toBe(1612903);
})
