// imports
const { calculateTotal } = require("../functions/total.js");

// This array holds the whole monthlyExpenses list
var afterTax = 0;
var totalSavings = 0;
var totalExpenses = 0;

// Before each and after each tests
beforeEach(() => {
    // well say they save 10%, which is 50k
    afterTax = 98000;
    totalSavings = 15000;
    totalExpenses = 6000;
})

afterEach(() => {
    // array should be cleared here
    afterTax = 0;
    totalSavings = 0;
    totalExpenses = 0;
})

test("Simple math test to calculate total", () => {
    let result = 0;
    result = calculateTotal(afterTax, totalSavings, totalExpenses);
    expect(result).toBe(77000)
})

