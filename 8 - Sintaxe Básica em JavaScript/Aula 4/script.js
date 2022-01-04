// Estruturas Condicionais
// If e Else If (segunda condição) e If com If
var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 != -1){
    if (jogador1 > 0) {
        console.log("Jogador1 marcou um ponto!");
        }else if (jogador2 >0){
            console.log("Jogador2 marcou 1 ponto!");
            }else{
            console.log("Ninguém marcou ponto!");
            }
    }
//If ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos - true') : console.log('Os jogadores são inválidos - false');
// If com verificação apurada
if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador1 marcou um ponto!");
    placar = jogador1 > jogador2;
    }else if (jogador2 >0 && jogador1 == 0) {
        console.log("Jogador2 marcou um ponto!");
        placar = jogador2 > jogador1;
        }else{
        console.log("Ninguém marcou ponto!");
        }
// Switch/Case
switch (placar) {
    case placar = jogador1 > jogador2 :
        console.log("O jogador1 venceu!");
        break;
    case placar = jogador2 > jogador1 :
        console.log("O jogador2 venceu!");
        break;
    default :
        console.log("Ninguém ganhou!")
}
// For
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);//0, 1, 2, 3, 4
}
// for in - declaração: for([indice] in [objeto ou array]) {declaração}
for (let i in array) {
    console.log(i);// 0, 1, 2, 3, 4
}
for (i in object) {
    console.log(i);//propriedade1, propriedade2, propriedade3
}
// for of - declaração: for([indice] of [array]) {declaração}
for (let i of array) {
    console.log(i);//valor1, valor2, valor3, valor4, valor5
}
//for of com objetos não funciona!

//while - while (condição) {faça}
var a = 0;
while (a < 10) {
    a = a + 1;
    console.log(a);
}
// DO/While - do {faça} while (condição) 
var b = 0;
do {
    b++
    console.log(b);
} while (b < 4);
