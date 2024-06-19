function printLastChar(str) {
    if (typeof str!== "string") {
        throw new Error("Неверная строка");
    }
    console.log(str.slice(-1));
}

printLastChar("Hello");