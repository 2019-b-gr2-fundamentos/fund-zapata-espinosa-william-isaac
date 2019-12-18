function compararMatriz(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = optenerPrimerDimension(matrizUno);
    var matrizUnoSegundaDimension = optenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = optenerPrimerDimension(matrizDos);
    var matrizDosSegundaDimension = optenerSegundaDimension(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    return true;
}
// VALIDACION 
function optenerPrimerDimension(matrizUno) {
    var esValido = verificarTodosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var optenerPrimerDimensionArreglo = matrizUno.length;
        return optenerPrimerDimensionArreglo;
    }
    else {
        return false;
    }
}
function optenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosElementosDeUnArregloSonArreglo(matrizUno);
    var longitudActualMax = 0; // Aux
    var longitudActualMimn = -1; // Aux
    if (esValido) {
        for (var i = 0; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i]; // arreglo 
            var longitudActual = elementoActual.length; // segunda dimension
            if (longitudActualMax < longitudActual) {
                longitudActualMax = longitudActual;
            }
            if (longitudActual < longitudActualMimn && longitudActualMimn >= 0) {
                longitudActualMimn = longitudActual;
            }
            else if (longitudActualMimn == -1) {
                longitudActualMimn = longitudActual;
            }
            else if (longitudActual < longitudActualMimn) {
                longitudActualMimn = longitudActual;
            }
        }
        if (longitudActualMax != longitudActualMimn) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
var arregloMatriz = [[1, 2], [3, 4, 5], [8, 9, 8]];
function verificarTodosElementosDeUnArregloSonArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' && elementoActual.indexOf; //Truty
        if (!esUnArreglo) {
            return false; // Cuando el indexOf --- -1 si no hay O null o undefined
        }
    }
    return true;
}
function main() {
    var matrizUno = [
        [1, 2],
        [3]
    ];
    var matrizDos = [
        [1, 2],
        [3, 4],
    ];
    compararMatriz(matrizUno, matrizDos);
}
main();
