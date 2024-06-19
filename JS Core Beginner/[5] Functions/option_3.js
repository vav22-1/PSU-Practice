function findFirstUniqueCharacter(str) {
    const cleanedStr = str.replace(' ', '');
    const charMap = {};
    for (let char of cleanedStr) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    for (let char of cleanedStr) {
        if (charMap[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(findFirstUniqueCharacter("Hello world"));
