const fibonacci = function (n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    n = parseInt(n);
    let numA = 1;
    let numB = 1;
    let temp = 0;

    for (let i = 2; i < n; i++) {
        temp = numA + numB;
        numA = numB;
        numB = temp;
    }
    return numB;
};

// Do not edit below this line
module.exports = fibonacci;
