'use strict'
function contains(arr, val) {
    if (!Array.isArray(arr)) {
        throw new Error("Неверный массив");
    }
    return arr.includes(val);
}
const myArray = [1, 2, 3, 4, 5];
console.log(contains(myArray, 3));
console.log(contains(myArray, 6));