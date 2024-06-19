async function loadDataFromServer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP статус: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}
async function parallelLoadData(urls) {
    try {
        const responses = await Promise.all(urls.map(url => loadDataFromServer(url)));
        return responses;
    } catch (error) {
        console.error('Ошибка при параллельной загрузке данных:', error);
    }
}

parallelLoadData([
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
])
.then(dataArray => dataArray.forEach((data, index) => console.log(`Данные с сервера ${index+1}:`, data)))
.catch(error => console.error(error));
