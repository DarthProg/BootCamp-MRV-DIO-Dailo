const meuArray = [30, 30, 40, 5, 223, 2040, 3034, 5];

function valoresUnicos (arr) {
    const mySet = new Set(arr);
    return [...mySet];// rest para virar um Array e não um Set...
}
console.log(valoresUnicos(meuArray));