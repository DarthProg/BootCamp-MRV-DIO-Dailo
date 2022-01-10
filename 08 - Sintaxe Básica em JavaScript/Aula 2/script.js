//tipos primitivos
//boolean:
var vOuF = false;
console.log(typeof vOuF);
//number:
var numeroQualquer = 1;
console.log(typeof numeroQualquer);
//string:
var nome = 'dailo';
console.log(typeof nome);

// var, let e const
//var - variável (global, local e alterável - pode ser declarada nula)
var numeroTeste = 1;
console.log(numeroTeste); // mostrando antes de alterar
numeroTeste = numeroTeste + numeroQualquer;
console.log(numeroTeste); // mostrando após alterar

//let - variável (local de bloco e alterável - pode ser declarada nula)
let nomeLet = "lilian";
console.log(nomeLet); // mostrando antes de alterar
nomeLet = nome;
console.log(nomeLet); // mostrando após alterar

//const - constante (local de bloco - somente leitura - não é possível alterar - obrigatório declarar)
const constanteTeste = "não modifico";
console.log(constanteTeste); // se tentar alterar dará mensagem de erro no código.

//escopo Global (vista por todo código) - escopo local (só dentro do código) - vide exemplo abaixo
var escopoGlobal = "global";
console.log(escopoGlobal); 
function escopoLocal (){
    let escopoLocal = "local";
    console.log(escopoLocal);
}
escopoLocal();

// regras de uso: não iniciar por números, não usar espaços e não usar palavras reservadas - usar camelCase

// atribuição
var atribuicao = 'dailo'; // o sinal de = atribui valor não compara valores 

//comparação, usa-se o sinal de igual dobrado ==
var comparacao = "0" == 0; // aqui o valor será true, pois comparou somente "valor"
console.log(comparacao); // nesse caso o valor retornado é sempre boleano - false ou true 

// comparação identica, usa-se o sinal de igual triplicado === compara valor e tipo de variável 
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); // aqui o valor retornado será false, pois o valor é igual, porém um é string e o outro number 

// adição - operador +
var adicao = 1 + 1; 
console.log(adicao);//retornará a soma = 2

// subtração - operador -
var subtracao = 1 + 1; 
console.log(subtracao);//retornará a subtração = 0

// multiplicação - operador *
var multiplicacao = 1 * 3; 
console.log(multiplicacao);//retornará a multiplicação = 3

// divisão Real - operador /
var divisaoReal = 4 / 2; 
console.log(divisaoReal);//retornará a divisão Real = 2

// divisão inteira - operador % retorna o resto da divisão real
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);//retornará o resto da divisão de 5 por 2 = 1

// potenciação - operador ** eleva um número a uma potência
var potenciacao = 2 ** 10;
console.log(potenciacao);//retornará o resultado de 2 elevado à décima potência = 1024 

// operações relacionais - comparam valores - operadores < > <= >=
var menorQue = 5 < 2; // falso
var maiorQue = 5 > 2; // verdadeiro 
var menorIgualQue = 5 <= 2; // falso
var maiorIgualQue = 5 >= 2; // verdadeiro
console.log(menorQue);
console.log(maiorQue);
console.log(menorIgualQue);
console.log(maiorIgualQue);

// operadores lógicos - && "e" - considera que todos valores são true 
var logicoE = true && false; 
console.log(logicoE);// retorna false, pois tem um falso

// operadores lógicos - || - "ou" - considera que um dos valores é true
var logicoOu = true || false;
console.log(logicoOu); // retorna true, pois tem um verdadeiro

// operadores lógicos - ! - "não" - inverte o valor boleano (se é true vira false, e vice-versa)
var logicoNao = !false;
console.log(logicoNao); // retorna true, pois false é invertido pelo operador