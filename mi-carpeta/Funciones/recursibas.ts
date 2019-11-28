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


const arregloa = [1,2,3,4,5];
console.log(arregloa);

function imprimirElemenrtosDeUnArreglo(arregloa: Number[], indice:number):void{
if(indice <= 4){
    console.log(arregloa[indice]);
    const indiceNuevos = indice + 1;
    imprimirElemenrtosDeUnArreglo(arregloa, indiceNuevos);
}else {
    console.log("Se ha mostrado todos los elementos XD")
}

}

function main(){
    imprimirElemenrtosDeUnArreglo(arregloa,0);
}
