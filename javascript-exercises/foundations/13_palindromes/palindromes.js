/**
 * 
 * @param {string} string 
 */
const palindromes = function (string) {
    const onlyLetters = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "").toLowerCase();
    let start = 0;
    let end = onlyLetters.length - 1;
    while (start < end) {
        if (onlyLetters[start] != onlyLetters[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
