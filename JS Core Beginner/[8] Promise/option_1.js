function asyncOperation1() {
    return new Promise((resolve, reject) => {
        resolve('Результат операции 1');
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        resolve('Результат операции 2');
    });
}

asyncOperation1()
    .then(result1 => {
        console.log(result1);
        return asyncOperation2();
    })
    .then(result2 => {
        console.log(result2);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
