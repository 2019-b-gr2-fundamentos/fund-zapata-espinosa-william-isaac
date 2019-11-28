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
//function main(){
//imprimirMensajeNvECES('holas',3);
//}
//const arregloa = [1,2,3,4,5];
//console.log(arregloa);
//function imprimirElemenrtosDeUnArreglo(arregloa: Number[], indice:number):void{
//if(indice <= 4){
//  console.log(arregloa[indice]);
//  const indiceNuevos = indice + 1;
//  imprimirElemenrtosDeUnArreglo(arregloa, indiceNuevos);
//}else {
// console.log("Se ha mostrado todos los elementos XD")
//}
//}
//function main(){
//imprimirElemenrtosDeUnArreglo(arregloa,0);
//}
var arreglob = [];
var arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
function elementosDeArreglo(arreglo, indice) {
    if (indice <= 4) {
        console.log(arreglo[indice]);
        var indiceNuevosa_1 = indice + 1;
        elementosDeArreglo(arreglo, indiceNuevosa_1);
    }
    else {
        console.log("El arreglo es: ");
    }
    console.log("El arreglo invertido es: ");
    var indiceNuevosa = 4;
    if (indiceNuevosa >= 0) {
        console.log(arreglo[indice]);
        var indiceNuevosb = indice - 1;
        elementosDeArreglo(arreglo, indiceNuevosb);
    }
    else {
        console.log("GRACIAS");
    }
}
function main() {
    elementosDeArreglo(arreglo, 0);
    elementosDeArreglo(arreglob, 4);
}
