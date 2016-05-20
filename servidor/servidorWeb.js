var express = require('express');
var path = require('path');
var server = express();
var root = path.normalize(__dirname + '/../');
var porta = 8080;

server.use(express.static(root + '/app/'));

server.listen(porta);
console.log('Servidor rodando, abrir o navegador e ir no endereço: localhost:'+ porta);