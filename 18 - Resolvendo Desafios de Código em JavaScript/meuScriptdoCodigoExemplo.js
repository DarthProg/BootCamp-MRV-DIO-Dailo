//resolvi criar meu código simplificado do código do desafio da aula, só como treino. Faz o que é pedido.
let gets =[6,2];
let limit = 1;
let line1 = gets[0];
let line2 = gets[1];
let X = parseInt(line1);
let Y = parseInt(line2);
if (Y == 0) {
    console.log("divisão impossível");
} else {
    let divisao = (X / Y).toFixed(1);
    console.log(divisao);
}
