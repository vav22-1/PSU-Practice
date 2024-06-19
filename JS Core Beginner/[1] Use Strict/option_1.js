'use strict'
function factorial(n) {
    if (n < 0 || typeof n!== "number") {
        throw new Error("Введите целое положительное число");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(6));