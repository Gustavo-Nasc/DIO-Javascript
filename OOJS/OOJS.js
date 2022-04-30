//Material de Referência da Atividade:
//https://github.com/stebsnusch/basecamp-javascript/tree/main/orientacao-a-objetos

//Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.
//1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
//2. Dentro de ContaBancaria, construa o getter e o setter de saldo;
//3. Dentro de ContaBancaria, crie os métodos sacar e depositar;
//4. Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
//5. Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
//6. Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
//7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
//8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
//9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

//Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class bankAccount {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    //Dentro de ContaBancaria, construa o getter e o setter de saldo;
    //Getter
    get saldo() {
        return this._saldo;
    }

    //Setter
    set saldo(value) {
        this._saldo = value;
    }

    //Dentro de ContaBancaria, crie os métodos sacar e depositar;
    //Saque
    saque(value) {
        if (value > this._saldo) {
            return "Operação Negada";
        }

        this._saldo = this._saldo - value;

        return this._saldo;
    }

    //Depósito
    deposito(value) {
        this._saldo = this._saldo + value;

        return this._saldo;
    }
}

///Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

class checkingAccount extends bankAccount {
    constructor(agencia, numero, creditCard) {
        super(agencia, numero);

        //Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
        this.tipo = 'Conta Corrente';

        this._creditCard = creditCard;
    }

    //Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    get creditCard() {
        return this._creditCard;
    }

    set creditCard(value) {
        this._creditCard = value;
    }
}

//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class savingAccount extends bankAccount {
    constructor(agencia, numero) {
        super(agencia, numero);

        this.tipo = 'Conta Poupança';
    }
}

//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class universityAccount extends bankAccount {
    constructor(agencia, numero) {
        super(agencia, numero);

        this.tipo = 'Conta Universitária';
    }

    //Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

    saque(value) {
        if (value > 500) {
            return "Operação Negada";
        }

        this._saldo = this._saldo - value;
    }
}