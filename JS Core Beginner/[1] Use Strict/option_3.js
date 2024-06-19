'use strict'

function countVowels(str) {
    if (typeof str!== "string") {
        throw new Error("Неверная строка");
    }
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',];
    const russianVowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char) || russianVowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
console.log(countVowels("Привет Мир"));