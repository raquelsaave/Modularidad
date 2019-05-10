'use strict'

const http = require('http');
const router =  require('./router')
const puerto = 3000;

http.createServer( router ).listen( puerto );