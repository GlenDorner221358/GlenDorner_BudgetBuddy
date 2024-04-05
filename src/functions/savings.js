const handleSavings = (salaries, percentageSave) => {
    const updatedSavings = salaries.map(salary => ({
        ...salary,
        saves: salary.salary * percentageSave / 100
    }));

    return(updatedSavings);
};

const calculateTotalSavings = (list) => {
    let result = list.reduce((acc, curr) => acc + curr.saves, 0);
    return result;
};

module.exports = { calculateTotalSavings, handleSavings };