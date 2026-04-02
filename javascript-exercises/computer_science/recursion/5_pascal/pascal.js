const pascal = function (level, tree) {
    if (level == 1) {
        if(tree) tree.push([1]);
        return [1];
    }
    //Tambem seria possível fazer com o reduce
    // const newArr = [0, ...pascal(level - 1), 0].reduce((acc, cur, index, arr) => {
    //     if (index == arr.length - 1) return acc;
    //     acc.push(cur + arr[index + 1]);
    //     return acc;
    // }, [])
    // return newArr;

    const levelArr = [0, ...pascal(level - 1, tree), 0];
    for (let i = 0; i < levelArr.length - 1; i++) {
        levelArr[i] = levelArr[i] + levelArr[i + 1];
    }
    if (tree) tree.push(levelArr.slice(0, level));
    return levelArr.slice(0, level);
};

//Chamar por aqui para ver a arvore
// const tree = [];
// pascal(17, tree);
// console.log(tree.join("\n"));
// Do not edit below this line
module.exports = pascal;
