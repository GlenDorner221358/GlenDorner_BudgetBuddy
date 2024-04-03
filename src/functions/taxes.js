function calculateTaxes(item) {
    if (item < 237000) {
        // Code block for R1 - 237K = 18%
        return Math.round(item * 100 / 18);

    } else if (item < 370500) {
        // Code block for 237K - 370K = 26%
        return Math.round(item * 100 / 26);

    } else if (item < 512800) {
        // Code block for 370K - 512K = 31%
        return Math.round(item * 100 / 31);

    } else if (item < 673000) {
        // Code block for 512K - 673K = 36%
        return Math.round(item * 100 / 36);

    } else if (item < 857900) {
        // Code block for 673K - 857K = 39%
        return Math.round(item * 100 / 39);

    } else if (item < 1817000) {
        // Code block for 857K - 1817K = 41%
        return Math.round(item * 100 / 41);

    } else {
        // Code block for 1817K < = 45%
        return Math.round(item * 100 / 45);
    }
}

module.exports = { calculateTaxes };
