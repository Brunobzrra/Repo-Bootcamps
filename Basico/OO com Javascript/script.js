class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return 'operacao negada';
        } else {
            this._saldo = this._saldo - valor;
            return this._saldo
        }
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoDeCredito) {
        super(agencia, numero)
        this.tipo = 'conta corrente';
        this.cartaoDeCredito = cartaoDeCredito;
    }

    get creditCard() {
        return this._cartaoDeCredito;
    }

    set creditCard(valor) {
        this._cartaoDeCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }

    sacar(valor) {
        if (valor > 500)
            return 'operacao negada';
        this._saldo -= 500;
    }
}