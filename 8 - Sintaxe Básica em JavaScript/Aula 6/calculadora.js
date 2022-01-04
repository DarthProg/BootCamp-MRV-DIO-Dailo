function calculadora() {
// prompt de escolha de operação:
const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

//Não permitindo entradas erradas no prompt inicial 
    if (!operacao || operacao >= 7)
    {
    alert("Operação Inválida");
    calculadora();
    } 
    else 
    {

// declaração de variaveis para cálculos:
    let n1 = Number(prompt("Insira o primeiro valor da operação:")); // a função nativa prompt pedirá o primeiro número ao usuário
    let n2 = Number(prompt("Insira o segundo valor da operação:")); // a função nativa prompt pedirá o segundo número ao usuário
    let resultado;

// verificar variáveis
    if (!n1 || !n2) 
    {
    alert("Um dos valores digitados é inválido, tente novamente!");
    calculadora();
    }
    else 
        {

//funções de operações:
        function soma () {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`); // usando crase pra Template String - usar numeros e string juntos
            novaOperacao();
        }
        function subtracao () {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`); 
            novaOperacao();
        }
        function multiplicacao () {
            resultado = n1 * n2;
            alert(`${n1} x ${n2} = ${resultado}`); 
            novaOperacao();
        }
        function divisaoReal () {
            resultado = n1 / n2;
            alert(`${n1} divido por ${n2} = ${resultado}`);
            novaOperacao();
        }
        function divisaoInteira () {
            resultado = n1 % n2;
            alert(`O resto da divisão de ${n1} por ${n2} é ${resultado}`); 
            novaOperacao();
        }
        function potenciacao () {
            resultado = n1 ** n2;
            alert(`${n1} elevado à ${n2} = ${resultado}`); 
            novaOperacao();
        }

    //função deseja nova operação?
        function novaOperacao () {
            const opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até logo!');
            } else {
                alert("Opção inválida!");
                novaOperacao();
            }
        }

    /*if para chamar a operação correta escolhida pelo usuário
            if (operacao == 1){
            soma();
            }else if (operacao == 2){
                subtracao();
            }else if (operacao == 3){
                multiplicacao();
            }else if (operacao == 4){
                divisaoReal();
            }else if (operacao == 5){
                divisaoInteira();
            }else if (operacao == 6){
                potenciacao();
            }*/
    
    // switch/case para substituir o if acima:
            switch(operacao){
                case 1: soma();
                break;
                case 2: subtracao();
                break;
                case 3: multiplicacao();
                break;
                case 4: divisaoReal();
                break;
                case 5: divisaoInteira();
                break;
                case 6: potenciacao();
                break;
            }
        } // fecha o else do if da verificação de variáveis 
    } // tá fechando o else do if inicial
} // fecha a função calculadora
calculadora();