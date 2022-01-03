function inserindo(){
let li = document.createElement('LI');
let inputValue = document.taskform.insert.value;
let inputText = document.createTextNode(inputValue);

/*criando o item da lista e dando uma classe com o valor de inputValue (texto digitado):*/
document.querySelector('ul').appendChild(li);
li.className = inputValue;

/*criando o item da label e o item span:*/
let label = document.createElement('LABEL');
let span = document.createElement('SPAN');

/*selecionando a li com a classe igual ao texto digitado - deve-se extrair o conteúdo da variável com a função "CSS.escape()":*/
document.querySelector("[class="+CSS.escape(inputValue)+"]").appendChild(label);

/*criando o item da input do tipo checkbox e colocando ele como filho de label dentro de label:*/
let input = document.createElement("INPUT");
input.type="checkbox";
label.appendChild(input);

/*criando um span dentro da label com o texto de identificação que aparecerá na tela - a tarefa digitada*/
label.appendChild(span);
span.appendChild(inputText);

/*chamando a função de criar botão de exclusão da tarefa:*/
createCloseButton(li);

/*resetando o input do fomrulário de entrada de dados:*/
document.taskform.insert.value = "";

}
/*Código da função que cria o botão de excluir a tarefa: */
function createCloseButton(li) {
    let closeButton = document.createElement("INPUT");

    closeButton.className = "close";
    closeButton.type = "button";
    closeButton.value = "Excluir";

    li.appendChild(closeButton);
   
    closeButton.onclick = () => closeButton.parentElement.style.display = "none";
    
    /* falta inserir código para excluir a li*/
}

/*  Exemplo do que foi feito em "closeButton":

    input.onclick = () =>li.classList.add("feito");
    
    Obs: as funções com uma só ação dá para resumir como fiz na linha acima. Linha acima igual função abaixo completa:

    document.getElementById("feito").addEventListener("click", executeAcoes);
    function executeAcoes() {
    li.className="feito";
    }
*/