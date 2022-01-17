const orange = {price: 2};
const apple = {price: 3};
const banana = {price: 4};
const greenApple = {price: 5};
const grapes = {price: 8};
/*
function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item*this.price;
    }, thisArg);
}
 const nums = [1,2];

 console.log('this é orange -> ', mapComThis(nums, orange));
 console.log('this é apple -> ', mapComThis(nums, apple));
 console.log('this é banana -> ', mapComThis(nums, banana));
 console.log('this é greenApple -> ', mapComThis(nums, greenApple));
 console.log('this é grapes -> ', mapComThis(nums, grapes));
*/



function mapArray(arr, thisArg) {
         return arr.map(function (item) {
         return item * this.price;
     }, thisArg);
}
const nums = [1,2,3,4];
console.log('This é orange -> ', mapArray(nums, orange), '\n');
console.log('This é apple -> ', mapArray(nums, apple), '\n');
console.log('This é banana -> ', mapArray(nums, banana), '\n');
console.log('This é greenApple -> ', mapArray(nums, greenApple), '\n');
console.log('This é grapes -> ', mapArray(nums, grapes), '\n');