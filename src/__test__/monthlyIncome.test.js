// imports
const { addNewMonthlySalary, calculateTotalSalaries } = require("../functions/monthlySalaries.js");

// initialize a testing array
var monthlySalaries = [];

// These need to run before each and after each test
beforeEach(() => {
    monthlySalaries.push({icon: '🐶', name: "John Doe", salary: 15000})
    monthlySalaries.push({icon: '🐰', name: "Jane Doe", salary: 20000})
})

afterEach(() => {
    // array should be cleared here
    monthlySalaries = [];
})

// Now the REAL tests can begin...muahahahahaha....
// Test for adding a new salary
test("Test to check the logic behind adding a new salary:", () => {
    // We check if a new item has been added by checking monthlySalaries length
    // New item
    var newSalary = {icon: '😁', name: "Glen Dorner", salary: 12000};

    // check the length
    console.log("Length of list before adding: " + monthlySalaries.length);
    expect(monthlySalaries.length).toEqual(2);

    // add the new item
    var newSalaryList = addNewMonthlySalary(monthlySalaries, newSalary);

    // check the length again
    console.log("Length of list after adding: " + monthlySalaries.length);
    expect(newSalaryList.length).toEqual(3);
})

// Test for calculating the total household income before tax
test("test to check logic behind calculation of total income before tax:", () => {
    var total = calculateTotalSalaries(monthlySalaries)
    // var total = calculateTotalSalaries(monthlySalaries)
    var total = 0

    for (let i = 0; i < monthlySalaries.length; i++) {
        total = total + monthlySalaries[i].salary
    }

    expect(total).toEqual(35000)
})