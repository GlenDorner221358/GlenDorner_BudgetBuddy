function addNewMonthlyExpense(list, newItem) {
    return[...list, newItem];
}

function calculateTotalExpenses(list) {
    var result = 0;

    for (let x = 0; x < list.length; x++) {
        result = list[x].cost + result;
    }
    
    return result;
}

module.exports = { addNewMonthlyExpense, calculateTotalExpenses }