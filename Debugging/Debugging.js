//Material de Referência da Atividade:
//https://github.com/stebsnusch/basecamp-javascript/tree/main/debug-error

//O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

//Crie uma função que recebe um array e um número
//Realize as seguintes validações
//Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
//Se o array não for do tipo 'object', lance um erro do tipo TypeError
//Se o número não for do tipo 'number', lance um erro do tipo TypeError
//Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
//Utilize a declaração try...catch
//Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validateArray(array, number) {
    try {
        if (!array && !number)
            throw new ReferenceError("Envie os Parâmetros");

        if (typeof array !== 'object')
            throw new TypeError("Array precisa ser do tipo Object");

        if (typeof number !== 'number')
            throw new TypeError("Número precisa ser do tipo Number");

        if (array.length !== number)
            throw new RangeError("Tamanho do Array inválido");

        return array
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Esse erro é um ReferenceError");
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log("Esse erro é um TypeError");
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log("Esse erro é um RangeError");
            console.log(error.message);
        } else {
            console.log("Tipo de erro não esperado: " + error)
        }
    }
}

console.log(validateArray([1, 2, 3, 4, 5], 5))

//Links Auxiliares

//Objeto Error: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
//instanceof: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
//typeof: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
//try...catch: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch