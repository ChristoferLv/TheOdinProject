const factorial = function (num) {
    if (isNaN(num)) return undefined;
    if (num < 0) return undefined;
    if(!Number.isInteger(num)) return undefined;
    if (num == 0) return 1;
    return factorialCalc(num);
};

function factorialCalc(num) {
    if (num == 1) return 1;
    return num * factorialCalc(num - 1);
}

// Do not edit below this line
module.exports = factorial;