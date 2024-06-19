async function fetchDataWithTimeout(url, timeoutMillis) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeoutMillis);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Статус HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Данные из API:', data);
    } catch (error) {
        console.error('Время вышло');
    }
}

fetchDataWithTimeout('https://jsonplaceholder.typicode.com/posts', 1000);

