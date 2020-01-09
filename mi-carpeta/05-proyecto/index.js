// NODE MODULE
// const sumaLibreria = require('william-zapata/lib/suma');
/*
Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'william-zapata'
*/
var sumaLibreria = require('william-zapata/lib/suma');
var respuesta1 = sumaLibreria(1, 2);
console.log('La respuesta es: ', respuesta1);
var restaLibreria = require('resta_de_wz/resta');
var respuesta2 = restaLibreria(2, 1);
console.log('La respuesta es: ', respuesta2);
var multiplicacionLibreria = require('resta_de_wz/multiplicacion');
var respuesta3 = multiplicacionLibreria(2, 1);
console.log('La respuesta es: ', respuesta3);
var divisionLibreria = require('resta_de_wz/division');
var respuesta4 = divisionLibreria(2, 1);
console.log('La respuesta es: ', respuesta4);
var ivaLibreria = require('resta_de_wz/iva');
var respuesta5 = ivaLibreria(2, 1);
console.log('La respuesta es: ', respuesta5);
var volumen_conoLibreria = require('resta_de_wz/volumen_cono');
var respuesta6 = volumen_conoLibreria(2, 1);
console.log('La respuesta es: ', respuesta6);
var promedio_de_2_numerosLibreria = require('resta_de_wz/promedio_de_2_numeros');
var respuesta7 = promedio_de_2_numerosLibreria(2, 1);
console.log('La respuesta es: ', respuesta7);
