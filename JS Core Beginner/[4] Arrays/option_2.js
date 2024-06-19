function sumOfFirstHalf(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Неверный массив");
    }
    const halfLength = Math.ceil(arr.length / 2);
    return arr.slice(0, halfLength).reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOfFirstHalf(numbers));