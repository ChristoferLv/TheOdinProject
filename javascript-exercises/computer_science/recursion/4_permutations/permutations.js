/**
 * 
 * @param {Array} arr 
 */
const permutations = function (arr) {
    const newarr = []
    if (arr.length <= 1) return [arr]
    for (idx in arr) {
        let temp = arr.splice(idx, 1)[0];
        const permutated = permutations(arr.slice()); //[...arr] Também funcionaria para fazer a cópia
        permutated.forEach(element => {
            element.push(temp)
            newarr.push(element);
        });
        arr.splice(0, 0, temp);
    }

    return newarr
};

console.log(permutations([1, 2, 3]))

// Do not edit below this line
module.exports = permutations;
