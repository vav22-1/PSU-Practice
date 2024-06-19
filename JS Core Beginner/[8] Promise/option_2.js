function fetchUrlContent(url) {
    return fetch(url)
        .then(response => response.text())
        .catch(error => {
            console.error(`Ошибка при загрузке ${url}:`, error);
            return null;
        });
}

const urls = ['https://www.youtube.com/', 'https://vk.com/feed'];
const promises = urls.map(url => fetchUrlContent(url));

Promise.all(promises)
    .then(contents => {
        contents.forEach((content, index) => {
            console.log(`Содержимое URL ${urls[index]}:`, content);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке URL-адресов:', error);
    });
