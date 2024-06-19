async function fetchData() {
    try { 
        const firstResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!firstResponse.ok) {
            throw new Error(`Статус HTTP: ${firstResponse.status}`);
        }
        const firstData = await firstResponse.json();

        const secondResponse = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(firstData)
        });

        if (!secondResponse.ok) {
            throw new Error(`Статус HTTP: ${secondResponse.status}`);
        }

        const secondData = await secondResponse.json();
        console.log('Данные с второго сервера:', secondData);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

fetchData();
