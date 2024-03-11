function calculateSavings(list, percentage) {
    var result = 0;

    for (let x = 0; x < list.length; x++) {
        result = list[x].salary * percentage;
    }
    
    return result;
}

export { calculateSavings }