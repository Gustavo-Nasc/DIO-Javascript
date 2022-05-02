//Map
//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

function MapWithoutThis(array) {
    return array.map(function (item) {
        return item * 2;
    });
}

const numbers = [2, 4, 6, 8, 10];

console.log(MapWithoutThis(numbers));
console.log(numbers);

//No console, é possível notar que o Map criou um novo Arraym sem modificar o original