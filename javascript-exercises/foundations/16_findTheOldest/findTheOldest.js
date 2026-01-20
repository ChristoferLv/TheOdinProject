/**
 * 
 * @param {[]} people 
 */
// const findTheOldest = function (people) { //Primeira solução
//     people.sort((a, b) => {
//         return ((b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth) - ((a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth)
//     })
//     return people[0];
// };

const findTheOldest = function (people) { //Solução feita após olhar a resposta
    return people.reduce((oldest, current) => {
        const oldestAge = (oldest.yearOfDeath ?? new Date().getFullYear()) - oldest.yearOfBirth;
        const currentAge = (current.yearOfDeath ?? new Date().getFullYear()) - current.yearOfBirth;
        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
