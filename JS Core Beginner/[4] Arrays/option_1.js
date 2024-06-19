function increaseByTenPercent(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Неверный массив");
    }
    return arr.map(num => num * 1.1);
}

const numbers = [100, 200, 300];
console.log(increaseByTenPercent(numbers));
