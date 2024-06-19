function generateRandomNumberAndDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(new Error(`Случайное число ${randomNumber} больше 5`));
            }
        }, randomNumber * 1000);
    });
}

generateRandomNumberAndDelay()
   .then(number => console.log(`Успешно: ${number}`))
   .catch(error => console.error(error));
