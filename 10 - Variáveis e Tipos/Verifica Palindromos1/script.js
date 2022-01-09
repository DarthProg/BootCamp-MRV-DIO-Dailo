function verificaPalindromo1 (){
// solicitando o texto digitado e convertendo em string:
let inputValue = document.entrada.palind.value;
let palind = inputValue.toString(); 

// invertendo a string digitada para verificar se é igual
let palindInvertido = palind.split("").reverse().join("");

// declarando duas variáveis que serão usadas mais a frente para armazenar resultados
let ehOuNaoEh;
let textoFinal;

//compara se a plavra digitada é igual a palavra digitada invertida e define o valor da resposta:
if (palind === palindInvertido){
    ehOuNaoEh = "é";
} else {
    ehOuNaoEh = "não é";
}

// código para jogar resposta no HTML
textoFinal = `A palavra digitada: "${palind}" ${ehOuNaoEh} um palíndromo!`;
console.log(textoFinal);
let outputText = document.createTextNode(textoFinal);
console.log(outputText);
document.querySelector(".output").appendChild(outputText);

// apaga o input do HTML
document.entrada.palind.value = "";

} // encerra a função verificaPalindromo1


