const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('http://localhost:3000/');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/script.js');
});

app.get('/api', (req, res) => {
    res.send([
        { nome: 'Lucca' },
        { nome: 'Maria' },
        { nome: 'João' }
    ]);
});
