const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const req = require('express/lib/request');

app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores');
app.use('/api/fornecedores', roteador);

app.listen(config.get('api.porta'), () => {
    console.log('Server is running on port 3000');
})
