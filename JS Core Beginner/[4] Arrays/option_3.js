function sumOfSquares(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Неверный массив");
    }
    return arr.reduce((acc, curr) => acc + curr ** 2, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers));