// icons
export var iconOptions = ["👩", "👱‍♂️", "🐶", "🐱", "🐰", "🐻", "🦁", "🐷", "🐮"]

// percentage options for savings
export var percentageOptions = [5, 10, 15, 20]

// Total card values
let IncomeB4Tax = sessionStorage.getItem("TotalIncomeB4Tax")
let afterTax = sessionStorage.getItem("AfterTax");
let TotalSavings = sessionStorage.getItem("TotalSavings");
let TotalExpenses = sessionStorage.getItem("TotalExpenses");

// where we call the total cards
export var dummyCards = [
    {icon: "income.png", color: "#E4FDCD", label: "Total Income Before Tax", total: parseInt(IncomeB4Tax)},
    {icon: "tax.png", color: "#FFEED2", label: "Total Income After Tax", total: parseInt(afterTax)},
    {icon: "expense.png", color: "#FFE2D3", label: "Total Expenses", total: parseInt(TotalExpenses)},
    {icon: "savings.png", color: "#DDDDF7", label: "Total Savings", total: parseInt(TotalSavings)},
]

// last total card calculations and display
let LastTotal = parseInt(afterTax) - (parseInt(TotalSavings) + parseInt(TotalExpenses));

export var lastTotalCard = {icon: "wallet.png", color: "#CFF26D", label: "Total Left To Spend Each Month", total: LastTotal}
