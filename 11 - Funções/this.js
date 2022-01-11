function calculaIdadeDaquiXAnos (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade!`;
}
const pessoa1 = {nome: "Dailo", idade: 43};
const pessoa2 = {nome: "Lilian", idade: 36};
const pessoa3 = {nome: "Maria", idade: 64};
const pessoa4 = {nome: "Helena", idade: 83};
const crianca1 = {nome: "Gabriel", idade: 4};
const crianca2 = {nome: "Júlia", idade: 2};
const animal = {nome:"Dumbo", idade:7};

console.log (calculaIdadeDaquiXAnos.call(pessoa1, 14));
console.log (calculaIdadeDaquiXAnos.call(pessoa2, 14));
console.log (calculaIdadeDaquiXAnos.call(pessoa3, 14));
console.log (calculaIdadeDaquiXAnos.apply(pessoa4, [14]));
console.log (calculaIdadeDaquiXAnos.apply(crianca1, [14]));
console.log (calculaIdadeDaquiXAnos.apply(crianca2, [14]));
console.log (calculaIdadeDaquiXAnos.call(animal, 2));