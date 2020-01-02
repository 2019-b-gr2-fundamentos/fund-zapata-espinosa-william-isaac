function compararMatriz(matrizUno, matrizDos) {
    var esValido = tieneMatricesIgualesDimensiones(matrizUno, matrizDos);
    if (esValido) {
        // Comparar los valores
        return true;
    }
    else {
        return false;
    }
}
function tieneMatricesIgualesDimensiones(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = optenerPrimerDimension(matrizUno);
    var matrizUnoSegundaDimension = optenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = optenerPrimerDimension(matrizDos);
    var matrizDosSegundaDimension = optenerSegundaDimension(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    var noHayFalsos = matrizUnoPrimeraDimension != false &&
        matrizDosPrimeraDimension != false &&
        matrizUnoSegundaDimension != false &&
        matrizDosSegundaDimension != false;
    var igualDimension = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
        matrizUnoSegundaDimension == matrizDosSegundaDimension;
    if (noHayFalsos) {
        if (igualDimension) {
            return true;
        }
    }
    else {
        return false;
    }
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
function tienenMismosValores(matrizUno, matrizDos) {
    var primeraDimension = matrizUno.length;
    var segundaDimension = matrizUno[0].length;
    var banderaSonIguales = true;
    for (var i = 0; i < primeraDimension; i++) {
        for (var j = 0; j < segundaDimension; j++) {
            var valorActualM1 = matrizUno[i][j];
            var valorActualM2 = matrizDos[i][j];
            if (valorActualM1 != valorActualM2) {
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}
function main() {
    var matrizUno = [
        [1, 2],
        [3, 3]
    ];
    var matrizDos = [
        [1, 3],
        [3, 4],
    ];
    var resultado = compararMatriz(matrizUno, matrizDos);
    console.log("Resultado: ", resultado);
}
main();
