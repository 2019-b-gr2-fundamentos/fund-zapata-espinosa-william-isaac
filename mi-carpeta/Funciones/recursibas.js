function imprimirMensajeNvECES(mensaje, numeroVences) {
    if (numeroVences == 0) {
        console.log("CHaooo !!");
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVences - 1;
        imprimirMensajeNvECES(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imprimirMensajeNvECES('holas', 3);
    imprimirElemenrtosDeUnArreglo();
}
function imprimirElemenrtosDeUnArreglo(arregloa, longitud, indice) {
    longitud = arregloa.length;
    if (longitud < indice) {
        console.log(arregloa);
        indice = indice + 1;
    }
    else {
    }
}
