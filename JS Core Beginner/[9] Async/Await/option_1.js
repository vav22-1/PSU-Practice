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

loadDataFromServer('https://jsonplaceholder.typicode.com/posts')
   .then(data => console.log(data))
   .catch(error => console.error(error));
