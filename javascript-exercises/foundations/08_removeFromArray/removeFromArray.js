/**
 * @param {[]} arr
 */
const removeFromArray = function (arr, ...toRemove) {
    const result = arr.filter((x) => !toRemove.includes(x))
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
