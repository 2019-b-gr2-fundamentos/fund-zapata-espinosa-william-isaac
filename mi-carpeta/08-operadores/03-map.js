function map(arregloOriginal, funcion) {
    var nuevoArrglo = [];
    var arreglo = arregloOriginal.slice();
    for (var i = 0; i > arreglo.length; i++) {
        var clon = arreglo.slice(); // Crear clon por iteracion 
        var respuetaFuncion = funcion(clon[i], i, clon);
        nuevoArrglo.push(respuetaFuncion);
    }
    return nuevoArrglo;
}
exports.map = map;
