/**
 * 
 * @param {Object} obj 
 * @param {*} value 
 */
const contains = function (obj, num) {
    let found = false;
    for (let key in obj) {
        if (typeof obj[key] == 'object' && typeof num == 'object') {
            found = (obj[key] == num) || found;
        }
        if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                // console.log("Arrays", obj[key], num, typeof obj[key], typeof num, obj[key] === num);
                for (let i = 0; i < obj[key].length; i++) {
                    found = contains(obj[key][i], num) || found;
                }
            } else {
                // console.log("Objects", obj[key], num, typeof obj[key], typeof num, obj[key] === num);
                found = contains(obj[key], num) || found;
            }
        } else {
            // console.log("fim", obj[key], num, typeof obj[key], typeof num, obj[key] === num);
            if (Number.isNaN(obj[key]) && Number.isNaN(num)) {
                return true;
            }
            if (obj[key] === num) {
                return true;
            }
        }
    }
    return found;
};
// Do not edit below this line
module.exports = contains;

const meaningOfLifeArray = [42];
const object = {
    data: {
        duplicate: "e",
        stuff: {
            thing: {
                banana: NaN,
                moreStuff: {
                    something: "foo",
                    answer: meaningOfLifeArray,
                },
            },
        },
        info: {
            duplicate: "e",
            magicNumber: 44,
            empty: null,
        },
    },
};

console.log("chamada", contains(object, NaN));