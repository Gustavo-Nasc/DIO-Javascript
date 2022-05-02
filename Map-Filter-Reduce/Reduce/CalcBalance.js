//Reduce
//2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

//Criação da lista que será lida
const list = [
    {
        name: 'BATMAN - THE DARK KNIGHT',
        price: 1539.00
    },
    {
        name: 'IRON MAN MARK XLVII - SPIDER-MAN: HOMECOMING',
        price: 4099.00
    },
    {
        name: 'MILES MORALES - SPIDER-MAN: INTO THE SPIDER-VERSE',
        price: 2659.00
    }
];

//O saldo disponível para o pagamento de tudo
const AvaiableBalance = 10000;

//Função para calcular o saldo final depois dos pagamentos
function CalcBalance(disponivel, lista) {
    return lista.reduce(function (previous, current, index) {
        console.log('{ index:', index + 1, ' }');
        console.log({ previous });
        console.log({ current });
        return previous - current.price;
    }, disponivel);
}

console.log(CalcBalance(AvaiableBalance, list));