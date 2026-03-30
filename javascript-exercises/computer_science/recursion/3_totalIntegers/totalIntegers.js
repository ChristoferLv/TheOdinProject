/**
 * 
 * @param {Array} arr 
 */
const totalIntegers = function (arr) {
    if (!(typeof arr == 'object')) return undefined;
    
    const values = Object.values(arr); //"Desembrulha" os valores dentro de arrays e objetos 
    const total = values.reduce((acc, item) => {
        //Parte recursiva. Chama para os itens aninhados
        if (typeof item == "object" && item !== null) {
            return acc + totalIntegers(item);
        }
        
        //Caso base
        if (Number.isInteger(item))
            return acc + 1;
        return acc;
    }, 0)
    return total;
};

// Do not edit below this line
module.exports = totalIntegers;
