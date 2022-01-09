function verificaPalindromo2 (){
// solicitando o texto digitado e convertendo em string:
let inputValue = document.entrada.palind.value;
let palind = inputValue.toString(); 

// declarando duas variáveis que serão usadas mais a frente para armazenar resultados
let ehOuNaoEh;
let textoFinal;

//compara se a letra inicial é igual a última e assim por diante:
// cuidar para arredondar para baixo (Math.floor) o palind.length/2 pois em anagramas impares a divisão não será exata e dará erro
for (let i = 0; i< Math.floor(palind.length / 2); i++) {
if (palind[i] !== palind[palind.length - 1 - i]){
    ehOuNaoEh = "não é";
} else {
    ehOuNaoEh = "é";
}
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


