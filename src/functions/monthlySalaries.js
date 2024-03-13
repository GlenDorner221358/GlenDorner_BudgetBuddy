function addNewMonthlySalary(list, newItem) {
    return[...list, newItem];
}

function calculateTotalSalaries(list) {
    var result = 0;

    for (let x = 0; x < list.length; x++) {
        result = list[x].salary + result;
    }
    
    return result;
}

module.exports = { addNewMonthlySalary, calculateTotalSalaries }
// export default { addNewMonthlySalary, calculateTotalSalaries }
