// NODE MODULE
// const sumaLibreria = require('william-zapata/lib/suma');
/*
Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'william-zapata'
*/
var sumaLibreria = require('william-zapata/lib/suma');
var respuesta1 = sumaLibreria(1, 2);
console.log('La respuesta es: ', respuesta1);


var restaLibreria = require('william-zapata/lib/resta');
var respuesta2 = restaLibreria(2, 1);
console.log('La respuesta es: ', respuesta2);

var restaLibreria = require('william-zapata/lib/multiplicacion');
var respuesta2 = restaLibreria(2, 1);
console.log('La respuesta es: ', respuesta2);

var restaLibreria = require('william-zapata/lib/promedio_de_2_numeros');
var respuesta2 = restaLibreria(2, 1);
console.log('La respuesta es: ', respuesta2);