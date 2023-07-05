const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/detail.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cart.html'));
});

