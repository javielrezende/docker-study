const express = require('express');
const restfull = require('node-restful');
const server = express();
const mongoose = restfull.mongoose;

// Database
// A api de promise do Mongose esta depreciada, aparecendo warnings na tela.
// Com esse codigo abaixo, a promise do mongose será atribuida a promise do node!
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Teste
server.get('/', (req, res, next) => res.send('Back-End'));

// Start server
server.listen(3000);