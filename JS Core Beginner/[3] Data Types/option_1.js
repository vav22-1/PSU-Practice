function objectsAreEquivalent(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1!== "object" || obj1 === null || typeof obj2!== "object" || obj2 === null)
        return false;

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length!== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) ||!objectsAreEquivalent(obj1[key], obj2[key])) return false;
    }

    return true;
}
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };

console.log(objectsAreEquivalent(obj1,obj2));