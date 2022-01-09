function substituiPares (){
// solicitando o texto digitado e convertendo em string:
let inputValue = document.entrada.array.value;
let arrayString = inputValue.toString(); 

//Explodindo a string para formar o Array verdadeiro 
let arrayStringExplodido = arrayString.split(",");

//criando um array para armazenar os indez de arrayStringExplodidos
let array = [];

//pegando cada indice da string explodida e inserindo nos index do array final
for (i=0; i<arrayStringExplodido.length; i++) {
    array[i] = arrayStringExplodido[i];
}

// declarando duas variáveis que serão usadas mais a frente para armazenar resultados
let textoSubstitui;
let textoFinal;

//compara se a letra inicial é igual a última e assim por diante:
// cuidar para arredondar para baixo (Math.floor) o palind.length/2 pois em anagramas impares a divisão não será exata e dará erro
for (let i = 0; i< array.length; i++) {
if (array[i] % 2 === 0){
    array[i] = "P";
    textoSubstitui = "Todos os números pares foram substituídos por um P!";
}
}

// código para jogar resposta no HTML
textoFinal = `${textoSubstitui} Seu novo array é ${array}!`;
console.log(textoFinal);
let outputText = document.createTextNode(textoFinal);
console.log(outputText);
document.querySelector(".output").appendChild(outputText);

// apaga o input do HTML
document.entrada.array.value = "";

} // encerra a função verificaPalindromo1


