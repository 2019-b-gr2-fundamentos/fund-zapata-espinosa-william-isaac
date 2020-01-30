"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function some(arreglo, funcion) {
    var condicion = true;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion != true) {
            condicion = false;
            return condicion;
        }
        else {
            return condicion;
        }
    }
}
exports.some = some;
