const { Router } = require('express');
const path = require('path');

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index');
});

routes.post('/upload', (req, res) => {
    console.log(req.file);
    res.send('Upload');
});

module.exports = routes;