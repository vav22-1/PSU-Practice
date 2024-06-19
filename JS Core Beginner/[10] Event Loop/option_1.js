function delayedCallback(callback, delay = 2000) {
    setTimeout(() => {
        callback();
    }, delay);
}

delayedCallback(() => console.log('Вызов callback функции'));
