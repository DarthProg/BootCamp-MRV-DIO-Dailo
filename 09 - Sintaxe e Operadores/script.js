function compara (){
// solicitando os números e preparando variáveis para armazenar e fazer cálculos:
let inputValue1 = document.entrada.n1.value;
let n1 = Number(inputValue1); 
let inputValue2 = document.entrada.n2.value;
let n2 = Number(inputValue2); 
let resultado;
let alerta;
let compara10;
let compara20;
let textoFinal;

// verificar números
if (n1 === n2) {
    alerta = "são iguais";
} else {
    alerta = "são diferentes";
}

// faz a soma dos números:
resultado = n1 + n2;

//compara se é maior/menor que 10 e 20:
//que 10:
if (resultado < 10){
    compara10 = "menor que";
} else if (resultado == 10) {
    compara10 = "igual a";
} else {
    compara10 = "maior que";
}
//que 20:
if (resultado < 20){
    compara20 = "menor que";
} else if (resultado == 20) {
    compara20 = "igual a";
} else {
    compara20 = "maior que";
}

textoFinal = `Os números digitados foram ${n1} e ${n2} e ${alerta}!\n Sua soma é ${resultado}, que é ${compara10} 10 e ${compara20} 20.`;
console.log(textoFinal);
let outputText = document.createTextNode(textoFinal);
console.log(outputText);
document.querySelector(".output").appendChild(outputText);

document.entrada.n1.value = "";
document.entrada.n2.value = "";

} // encerra a função compara


