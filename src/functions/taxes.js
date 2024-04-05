function calculateTaxes (income) {
    let brackets = [
        { limit: 237000, rate: 0.18 },
        { limit: 370500, rate: 0.26 },
        { limit: 512800, rate: 0.31 },
        { limit: 673000, rate: 0.36 },
        { limit: 857900, rate: 0.39 },
        { limit: 1817000, rate: 0.41 },
        { limit: Infinity, rate: 0.45 }
    ];

    let taxAmount = 0;
    let taxBracket = '';

    for (let bracket of brackets) {
        if (income <= bracket.limit) {
        taxAmount = income * bracket.rate;
        taxBracket = `${bracket.rate * 100}%`;
        break;
        }
    }

    return { taxAmount, taxBracket };
}

// calculates the total money left after taxes
function calculateTotalAfterTax (array) {
    let afterTaxTotal = 0;

    for (let i = 0; i < array.length; i++) {
        afterTaxTotal += array[i].afterTaxIncome;
    }

    return afterTaxTotal;
}

function calculateYOURTaxes (array) {
    const updatedFinalPplTaxxed = [];

    for (let person of array) {
        const { taxAmount, taxBracket } = calculateTaxes(person.salary);
        const afterTaxIncome = person.salary - taxAmount;
        updatedFinalPplTaxxed.push({ 
            icon: person.icon, 
            name: person.name, 
            taxAmount,
            taxBracket,
            afterTaxIncome
        });
    }

    return updatedFinalPplTaxxed;
}

module.exports = { calculateTaxes, calculateTotalAfterTax, calculateYOURTaxes };