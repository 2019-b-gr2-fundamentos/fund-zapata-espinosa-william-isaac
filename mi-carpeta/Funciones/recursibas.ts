function imprimirMensajeNvECES(mensaje:string, numeroVences:number):void{

if(numeroVences == 0){
    console.log("CHaooo !!")
}else{
    console.log(mensaje);
    const nuevoNumeroVeces = numeroVences - 1;
    imprimirMensajeNvECES(mensaje,nuevoNumeroVeces);
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

const arreglob = [];
const arreglo = [1,2,3,4,5]; 
console.log(arreglo);
function elementosDeArreglo(arreglo:number[], indice:number):void{
if(indice <=4){
    console.log(arreglo[indice]);
    const indiceNuevosa = indice + 1;
    elementosDeArreglo(arreglo, indiceNuevosa);
}else{
    console.log("El arreglo es: ");
}
console.log("El arreglo invertido es: ");
const indiceNuevosa = 4;
if(indiceNuevosa >=0){
console.log(arreglo[indice]);
const indiceNuevosb = indice - 1;
elementosDeArreglo(arreglo, indiceNuevosb);
}else{
    console.log("GRACIAS");
}

}
function main(){
    elementosDeArreglo(arreglo,0);
    elementosDeArreglo(arreglob,4);
}