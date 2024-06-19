function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error('Число не является целым');
    }
}

checkInteger(5.6);