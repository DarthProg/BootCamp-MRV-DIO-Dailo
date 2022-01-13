class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia =agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo = valor;
        return this._saldo;
    }

    sacar(valor){
        if (this._saldo < valor) {
            return 'Operação negada por insuficiência de fundos!';
        } else {
            this._saldo = this._saldo - valor;
        }
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Negada! Excedeu o limite de R$500';
        } else {
            this._saldo = this._saldo - valor;
        }
        return this._saldo;
    }
}