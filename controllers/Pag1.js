'use strict';
const modelP1 = require ("../models/modeloPag1");

//CONTROLADOR

const pag1 = (request) => {
    console.log("Hola");
    //return request.url;
    var result = modelP1(); //ahora mandamos a llamar el modelP1 que regresa el archivo JSON 
    return JSON.stringify(result); // JSON.stringify convierte el archivo JSON a string para que se pueda mostrar
};

module.exports = pag1; 