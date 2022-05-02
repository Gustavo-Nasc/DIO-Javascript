//Reduce
//1. Some todos os números de um array

function sumNumbers(array) {
    return array.reduce(function (previous, current) {
        console.log({ previous });
        console.log({ current });
        return previous + current;
    });
}

const array = [1, 2, 3, 4];

console.log(sumNumbers(array));