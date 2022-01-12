const meuArray = [3,4,5,6,7,8,9,0];

function validaArray (arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo objeto");
        if (typeof num !== 'number') throw new TypeError("Parâmetro precisa ser do tipo número");
        if (arr.length !== num) throw new RangeError("Tamanho inválido")
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log (e.message);
        } else if (e instanceof TypeError) {
        console.log("Este erro é um TypeError!");
        console.log (e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log (e.message);
        } else {
            console.log("Este erro não é esperado: "+ e);
        }
    }
}
console.log(validaArray()); // ReferenceError
console.log(validaArray("a", 6)); // TypeError parâmetro arr errado
console.log(validaArray([], "a")); // TypeError parâmetro num errado
console.log(validaArray([], 8)); // RangeError não há dados no array 
console.log(validaArray(meuArray, 8)); //correto