let entrada = "Olá, Mundo";
let invertida = "";

// Percorre a string de trás para frente e concatena os caracteres invertidos
for (let i = entrada.length - 1; i >= 0; i--) {
    invertida += entrada[i];
}

console.log("String original:", entrada);
console.log("String invertida:", invertida);
