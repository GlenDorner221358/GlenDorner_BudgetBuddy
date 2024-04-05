function calculateTotal (afterTax, totalSavings, totalExpenses) {
    let lastTotal = 0;
    lastTotal = (afterTax - (totalSavings + totalExpenses));
    return lastTotal;
}

module.exports = { calculateTotal }