// Imports
const { addNewMonthlyExpense, calculateTotalExpenses } = require("../functions/monthlyExpenses.js");

// This array holds the whole monthlyExpenses list
var monthlyExpenses = [];

// Before each and after each tests
beforeEach(() => {
    console.log("happens once before a test")
    monthlyExpenses.push({title: "Groceries", cost: 5000})
    monthlyExpenses.push({title: "Water", cost: 3200})
})

afterEach(() => {
    console.log("happens once after a test")
    // array should be cleared here
    monthlyExpenses = [];
})

// tests for adding an expense
describe("tests for adding a new expense", () => {

    test("Test to check the logic behind adding a new monthly expense using .length:", () => {
        // We check if a new item has been added by checking monthlyExpenses' length
        // New item
        var newExpense = {title: "Internet", cost: 1200}

        // check the length of the array before adding
        console.log("Length of list before adding a new expense: " + monthlyExpenses.length)
        expect(monthlyExpenses.length).toEqual(2)

        // add the new item to the array
        var newExpenseList = addNewMonthlyExpense(monthlyExpenses, newExpense);

        // check the length again after adding the new item
        console.log("Length of list after adding: " + monthlyExpenses.length)
        expect(newExpenseList.length).toEqual(3)
        
    })

    test("Test to check if the expense that was added is actually correct", () => {
        // this test is to check if the latest added expense actually matches what we add to the monthly expenses array
        // New item
        var newExpense = {title: "bricks", cost: 500}

        // now add it to the array
        monthlyExpenses = addNewMonthlyExpense(monthlyExpenses, newExpense);

        // Now we check if its what we added
        expect(monthlyExpenses[2].title).toMatch(/bricks/)
        expect(monthlyExpenses[2]).toEqual(newExpense)
        expect(monthlyExpenses.length).toEqual(3)
        expect(monthlyExpenses[2].cost).toEqual(500)
    })

})

describe("test to check if I can calculate the total expenses", () => {
    // tests for calculating total expenses
    test("test to check logic behind calculation of total expenses:", () => {
<<<<<<< Updated upstream

        var total = 0
        total = calculateTotalExpenses(monthlyExpenses)
        expect(total).toEqual(8200)
=======
        var total = 0;
        total = calculateTotalExpenses(monthlyExpenses);
        expect(total).toEqual(8200);
>>>>>>> Stashed changes
    })
})