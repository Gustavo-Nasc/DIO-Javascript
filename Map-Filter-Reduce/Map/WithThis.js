//Map
//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

//Objetos
const apple = {
    price: 2.75,
}

const orange = {
    price: 2,
}

//Função Map
function mapWithThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.price;
    }, thisArg);
}

//Na função mapWithThis, é possível mandar um array, e depois um objeto que será utilizado como o Argumento 'This'. Por exemplo: Se enviarmos o objeto 'apple' como 'this', ele irá olhar a apple e mutiplicar pelo valor do item do Array. Da mesma forma para a laranja.

const numbers = [1, 2];

console.log('this -> apple', mapWithThis(numbers, apple));
console.log('this -> orange', mapWithThis(numbers, orange));