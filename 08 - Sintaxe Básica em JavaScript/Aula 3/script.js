// array e objects

// Arrays
let array = ['string', 1, true, 3, 'dailo', 5, false];
console.log(array);
// manipula vários tipos de dados , inclusive outros arrays
let arrayVarios = ["string", 1, true, ['array1'], ['array2'], ['array3']];
console.log(arrayVarios);
console.log(arrayVarios[2]); // retorna apenas o segundo item do array, no caso "1"

//Manipuladores de arrays
//forEach() - intera um array 
array.forEach(function (item, index) {console.log(item, index)}); // retornará o item e seu index no console

//push() - add item ao final do array
array.push('novo item');
console.log(array); // incluirá "novo item" no final da lista

//pop() - remove item ao final do array
array.pop();
console.log(array); // removeu "novo item" do final da lista

//shift() - remove item no início do array
array.shift();
console.log(array); // removeu 'string" que estava no início da lista

//unshift() - add item no início do array
array.unshift('novo item');
console.log(array); // incluirá "novo item" no início da lista

//indexOf() - retorna o valor de uma posição chamada "o índice pedido"
console.log(array.indexOf(true)); // retornará o index de true, neste momento 3

//splice() - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array); // no caso ele apaga os valores dos quatro primeiros indices (de 0 a 3)

//slice() - retorna uma parte de um array
array.unshift('string', 1, true, 3); // apenas reinserindo os itens apagados no splice..kkkk
let sliceArray = array.slice(0, 3);
console.log(sliceArray); // mostra o novo array com os quatro índices que removi do início do array

//Objects:

let object = {string: 'string', number: 1, boolean: true, array: [1 , 2, 3, 4], objectInterno: {objectInterno:'objeto interno'}};
console.log(object); // mostra todos os itens do objeto 
console.log(object.number); //mostra apenas o item "numero" do objeto, no caso 1
// desconstruindo objetos:
var objetoString = object.string;
console.log(objetoString); // mostra a variável nova criada com o valor do item "string" do Objeto "object" abaixo faremos com todos itens
var objetoNumber = object.number;
var objetoBoolean = object.boolean;
var objetoArray = [object.array];
console.log(objetoNumber, objetoBoolean, objetoArray);
