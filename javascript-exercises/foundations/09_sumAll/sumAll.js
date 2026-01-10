/**
 * @param {number} start
 * @param {number} end
 */
const sumAll = function (start, end) {
    let result = 0;
    if (!(Number.isInteger(start) && start >= 0 && Number.isInteger(end) && end >= 0)) {
        return "ERROR";
    }
    if (end < start) {
        const temp = end;
        end = start;
        start = temp;
    }
    for (let i = start; i < end + 1; i++) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
