const { calculateTaxes, calculateTotalAfterTax, calculateYOURTaxes } = require("../functions/taxes.js");

var money = 0;
let person = [];
let otherPeople = '';

// Before each and after each tests
beforeEach(() => {
    // tax bracket for 500K is 31%
    money = 500000;

    person = [
        {
            icon: '👱‍♂️', 
            name: 'Joseppi Krakowski', 
            taxAmount: 155000,
            taxBracket: '36%',
            afterTaxIncome: 345000
        },
        {
            icon: '👩', 
            name: 'Mira Allonso', 
            taxAmount: 155000,
            taxBracket: '36%',
            afterTaxIncome: 345000
        }
    ];

    otherPeople = [
        {
            icon: '👱‍♂️', 
            name: 'Joseppi Krakowski', 
            salary: 500000
        },
        {
            icon: '👩', 
            name: 'Mira Allonso', 
            salary: 500000
        }
    ]
    
})

afterEach(() => {
    // array should be cleared here
    money = 0;
    person = [];
})

describe("Calculate taxes function testing", () => {

    test("check if tax calculation works", () => {
        let result = 0;
        result = calculateTaxes(money);
        expect(result.taxAmount).toBe(155000);
    })

    test("check if rate calculation works", () => {
        let result = "";
        result = calculateTaxes(money);
        // The tax bracket for 500k is 31%
        expect(result.taxBracket).toBe("31%");
    })
})

describe("After tax calculation", () => {

    test("check if adding tax info to array works", () => {
        let result = 0;
        result = calculateTotalAfterTax(person);
        // 340k x 2 = 690000
        expect(result).toBe(690000);
    })

    test("check if I can change an array using calculateYOURtaxes function", () => {
        let result = 0;
        console.log(otherPeople);
        result = calculateYOURTaxes(otherPeople);
        expect(result[0].taxBracket).toBe("31%");
    })
})

