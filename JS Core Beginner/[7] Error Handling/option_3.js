function checkNonZeroValue(a, b) {
    if (b === 0) {
        throw new Error('Второе число не может быть равно нулю');
    }
}

checkNonZeroValue(10,0);