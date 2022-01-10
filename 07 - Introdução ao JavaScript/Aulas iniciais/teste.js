//comentários de linha
/* comentário de mais de uma linha
nesse caso tem que lembrar de fechar */
//variaveis:
var preco = 2;
var desconto = 0.2;
preco = preco - desconto;
// constantes não podem ser alteradas:
const PRECO = 3;
var total = PRECO - desconto;
// no caso acima não se pode escreve PRECO = PRECO - desconto, pois PRECO é uma constante e não pode ter seu valor alterado
// funções:
function soma (a,b){
  //  console.log(a+b); - se quiser apenas escrever no debbuger do browser
    return a+b; // para retornar valor e utilizar ele depois
}
soma (3,5); // chama a função criada e passa os valores de a e b
