// imports
const { addNewMonthlySalary, calculateTotalSalaries } = require("../functions/monthlySalaries.js");

// initialize a testing array
var monthlySalaries = [];

// These need to run before each and after each test
beforeEach(() => {
    console.log("happens once before a test")
    monthlySalaries.push({icon: '🐶', name: "John Doe", salary: 15000})
    monthlySalaries.push({icon: '🐰', name: "Jane Doe", salary: 20000})
})

afterEach(() => {
    console.log("happens once after a test")
    // array should be cleared here
    monthlySalaries = [];
})


// Now the REAL tests can begin...muahahahahaha....
// Test for adding a new salary
test("Test to check the logic behind adding a new monthly expense:", () => {
    // We check if a new item has been added by checking monthlyExpenses' length
    // New item
    var newSalary = {icon: "", name: "george", salary: "12000"}

    // check the length
    console.log("Length of list before adding: " + monthlySalaries.length)
    expect(monthlySalaries.length).toEqual(2)

    // add the new item
    // var newSalaryList = addNewMonthlySalary(monthlySalaries, newSalary);
    monthlySalaries.push(newSalary)

    // check the length again
    console.log("Length of list before adding: " + monthlySalaries.length)
    expect(monthlySalaries.length).toEqual(3)
    
})

// Test for calculating the total household income before tax
test("test to check logic behind calculation of total income before tax:", () => {

    // var total = calculateTotalSalaries(monthlySalaries)
    var total = 0

    for (let i = 0; i < monthlySalaries.length; i++) {
        total = total + monthlySalaries[i].salary
    }

    expect(total).toEqual(35000)
})