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
test("Adding a new monthly expense:", () => {
    // We check if a new item has been added by checking monthlyExpenses' length
    // New item
    var newExpense = {title: "Internet", cost: "1200"}

    // check the length
    console.log("Length of list before adding: " + monthlyExpenses.length)
    expect(monthlyExpenses.length).toEqual(2)

    // add the new item
    var newExpenseList = addNewMonthlyExpense(monthlyExpenses, newExpense);

    // check the length again
    console.log("Length of list before adding: " + monthlyExpenses.length)
    expect(newExpenseList.length).toEqual(3)
    
})

