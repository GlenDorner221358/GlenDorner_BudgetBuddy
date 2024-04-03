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

<<<<<<< Updated upstream
module.exports = { addNewMonthlySalary, calculateTotalSalaries }
// export default { addNewMonthlySalary, calculateTotalSalaries }
=======
<<<<<<< HEAD
module.exports = { addNewMonthlySalary, calculateTotalSalaries };
=======
module.exports = { addNewMonthlySalary, calculateTotalSalaries }
// export default { addNewMonthlySalary, calculateTotalSalaries }
>>>>>>> ee2a816cf0e6c3e0b93bab328c81591026d776b6
>>>>>>> Stashed changes
