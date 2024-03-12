function verificaSequenciaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    while (atual <= numero) {
        if (atual === numero) {
            return true;
        }
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return false;
}

function mensagem(numero) {
    if (verificaSequenciaFibonacci(numero)) {
        console.log(numero + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numero + " não pertence à sequência de Fibonacci.");
    }
}

// Exemplo de uso
let numero = 13;
mensagem(numero);
