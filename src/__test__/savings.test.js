// imports
const { handleSavings, calculateTotalSavings } = require("../functions/savings.js");

// This array holds the whole monthlyExpenses list
var salaries = [];
var salariesNoSave = [];

// Before each and after each tests
beforeEach(() => {
    // well say they save 10%, which is 50k
    salaries.push({icon: "🐶", name: "Joseppi Krakowski", salary: 500000, saves: 50000})
    salaries.push({icon: "🐰", name: "Mira wanawana", salary: 500000, saves: 50000})

    salariesNoSave.push({icon: "🐶", name: "Joseppi Krakowski", salary: 500000})
    salariesNoSave.push({icon: "🐰", name: "Mira wanawana", salary: 500000})
})

afterEach(() => {
    // array should be cleared here
    salaries = [];
    salariesNoSave = [];
})

describe("Tests for the savings functions", () => {

    test("calculate the total savings from an array of objs", () => {
        let result = 0;
        result = calculateTotalSavings(salaries);
        expect(result).toBe(100000);
    })

    test("add a field named saves to the array of salaries as well as how much they save", () => {
        let result = "";
        result = handleSavings(salariesNoSave, 10);
        expect(result[0].saves).toBe(50000);
    })

})
