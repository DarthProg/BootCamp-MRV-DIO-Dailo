const saldo  = 200;
const prices = [2,5,10,30];

function somaPrices (arr){
    return arr.reduce(function (prev, current){
        return prev + current;
    })
}
const arr =  [saldo, somaPrices (prices)];

function calculaSaldo (arr){
    return arr.reduce(function(prev, current) {
        return prev - current;
    });
}

console.log (`Seu saldo inicial era de R$ ${saldo}!`);
console.log (`O valor das suas compras foram de R$ ${somaPrices(prices)}!`)
console.log (`O saldo final disponível é de R$ ${calculaSaldo(arr)} !`);