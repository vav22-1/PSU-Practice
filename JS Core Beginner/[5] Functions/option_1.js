function performRepeatedly(operation, intervalMilliseconds) {
    setInterval(() => operation(), intervalMilliseconds);
}

performRepeatedly(() => console.log('Выполнение функции'), 1000);
