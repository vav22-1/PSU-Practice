function fetchDataFromApi(apiUrl) {
    return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => {
            console.error(`Ошибка при запросе к API ${apiUrl}:`, error);
            return null;
        });
}

const apiUrls = [
    'https://evilinsult.com/generate_insult.php?lang=en&type=json',
    'https://jsonplaceholder.typicode.com/posts/1'
];

const apiPromises = apiUrls.map(url => fetchDataFromApi(url));

Promise.all(apiPromises)
    .then(apiResults => {
        const combinedData = apiResults.reduce((acc, data) => {
            return { ...acc, ...data };
        }, {});
        console.log('Объединенные данные из API:', combinedData);
    })
    .catch(error => {
        console.error('Ошибка при запросе к API:', error);
    });
