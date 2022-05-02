//Filter
//Filtre e retorne todos os números pares, ímpares e strings de um array.

//Filtrar pares
function FilterPar(array) {
    return array.filter(callBackPar);
}

function callBackPar(item) {
    return item % 2 == 0;
}

//Filtrar ímpares
function FilterImpar(array) {
    return array.filter(callBackImpar);
}

function callBackImpar(item) {
    return item % 2 !== 0;
}

//Filtrar ímpares
function FilterString(array) {
    return array.filter(callBackString);
}

function callBackString(item) {
    return item == 'Maçã';
}


const myArray = ['Maçã fuji', 'Maçã verde', 'Maçã gala', 'Maçã Argentina', 2, 4, 6, 8, 10, 11, 13, 15, 17, 19];

console.log(FilterPar(myArray));
console.log(FilterImpar(myArray));
console.log(FilterString(myArray));