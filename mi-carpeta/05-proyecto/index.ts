// NODE MODULE
// const sumaLibreria = require('william-zapata/lib/suma');
/*
Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'william-zapata'
*/
import * as sumaLibreria from 'william-zapata/lib/suma'
const respuesta1 = sumaLibreria(1,2);
console.log('La respuesta es: ',respuesta1);

import * as restaLibreria from 'resta_de_wz/resta'
const respuesta2 = restaLibreria(2,1);
console.log('La respuesta es: ',respuesta2);

import * as multiplicacionLibreria from 'resta_de_wz/multiplicacion'
const respuesta3 = multiplicacionLibreria(2,1);
console.log('La respuesta es: ',respuesta3);

import * as divisionLibreria from 'resta_de_wz/division'
const respuesta4 = divisionLibreria(2,1);
console.log('La respuesta es: ',respuesta4);

import * as ivaLibreria from 'resta_de_wz/iva'
const respuesta5 = ivaLibreria(2,1);
console.log('La respuesta es: ',respuesta5);

import * as volumen_conoLibreria from 'resta_de_wz/volumen_cono'
const respuesta6 = volumen_conoLibreria(2,1);
console.log('La respuesta es: ',respuesta6);

import * as promedio_de_2_numerosLibreria from 'resta_de_wz/promedio_de_2_numeros'
const respuesta7 = promedio_de_2_numerosLibreria(2,1);
console.log('La respuesta es: ',respuesta7);

import * as pi from 'resta_de_wz/promedio_de_2_numeros'
console.log('La constante pi es: ',pi);