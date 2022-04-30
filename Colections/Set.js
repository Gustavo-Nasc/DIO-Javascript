////Material de Referência da Atividade:
//https://github.com/stebsnusch/basecamp-javascript/tree/main/colecoes

//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array) {
    const mySet = new Set(array);

    return [...mySet]; //Dessa forma, ele retornará um novo array, e não um Set - Técnica chamada de Spread
}

console.log(uniqueValues(myArray));