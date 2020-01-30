"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcular(funcion, numeroUno, numeroDos) {
    var valorInicial = 10;
    return funcion(numeroUno, numeroDos, valorInicial);
}
exports.calcular = calcular;
;
function sumar(numeroUno, numeroDos, valorInicial) {
    return numeroUno + numeroDos;
}
exports.sumar = sumar;
function restar(numeroUno, numeroDos, valorInicial) {
    return numeroUno - numeroDos;
}
exports.restar = restar;
calcular(sumar, 1, 2); //3
calcular(function (numeroUno, numeroDos, valorInicial) {
    return numeroUno - numeroDos;
}, 5, 3); //2
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], // -> valor actual
        i, // -> indice 
        arreglo // - > Arreglo
        );
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
