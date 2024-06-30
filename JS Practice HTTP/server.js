const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/weather', async (req, res) => {
    const cityName = req.query.city || '';
    const apiKey = req.query.apikey;
    if (!cityName) {
        return res.status(101).json({ message: "Необходимо ввести город", code: 101});
    }
    if (cityName=="test") {
        return res.status(307).json({ message: "Перенаправление", code: 307});
    }
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        let errorMessage;
        switch (true) {
            case error.response.status == 401:
                errorMessage = 'Неверный ключ API.';
                return res.status(401).json({ message: errorMessage, code: 401 });
            default:
                errorMessage = 'Произошла непредвиденная ошибка.';
                return res.status(500).json({ message: errorMessage, code: 500 });
        }
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
