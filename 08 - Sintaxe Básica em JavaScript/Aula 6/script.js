// Aprofundando em Funções
// declarativas
function declarativas() {
    console.log("Minha função é declarar algo!");
}
declarativas();
// expressão de função 
// com nomeação
 var funcaoComNomeacao = function comNomeação() {
    console.log("Nomeada - chame com nome da variável, coloquei diferente para ver que não funciona com nome da função!");
 }
funcaoComNomeacao();
// sem nomeação
var funcaoSemNomeacao = function () {
    console.log("Eu funcionei mesmo sem Nomeação, meu nome é o da variavel para chamar");
}
funcaoSemNomeacao();
// arrow function 
var arrowFunction = () => {console.log("Arrow function em ação!")};
arrowFunction();
// Funções Artiméticas e criação de uma calculadora
// métodos nativos do JavaScript:
// Number() - converte valores em números, Prompt() - registra entradas do usuário, Alert() - mostra mensagem ao usuário e Template Strings - usar strings com expressões
