function imprimirMensajeNvECES(mensaje:string, numeroVences:number):void{

if(numeroVences == 0){
    console.log("CHaooo !!")
}else{
    console.log(mensaje);
    const nuevoNumeroVeces = numeroVences - 1;
    imprimirMensajeNvECES(mensaje,nuevoNumeroVeces);
}

}

function main(){
    imprimirMensajeNvECES('holas',3);
    imprimirElemenrtosDeUnArreglo();
}



function imprimirElemenrtosDeUnArreglo(arregloa: Number[],longitud:number, indice:number):void{
    longitud = arregloa.length
if(longitud<indice){
    console.log(arregloa);
    indice = indice + 1;
}else{

}


}
