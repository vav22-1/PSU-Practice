function sumFirstAndLastDigit(num) {
    if (typeof num!== "number" || Number.isNaN(num)) {
        throw new Error("Неверное число");
    }
    let numStr = num.toString();
    let firstDigit = parseInt(numStr.charAt(0));
    let lastDigit = parseInt(numStr.charAt(numStr.length - 1));

    console.log(firstDigit + lastDigit);
}
sumFirstAndLastDigit(12345);