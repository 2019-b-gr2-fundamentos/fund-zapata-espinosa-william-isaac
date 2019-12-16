function compararMatriz(matrizUno:number[][],matrizDos:number[][]):boolean {
return true;
}


// VALIDACION 
function optenerPrimerDimension(matrizUno:number[][]):number | false{
    const esValido = verificarTodosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const optenerPrimerDimensionArreglo = matrizUno.length;
        return optenerPrimerDimensionArreglo;
    } else {
        return false;
    }
    
}


function optenerSegundaDimension(matrizUno:number[][]):number | false{
    const esValido = verificarTodosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMax =0; // Aux
    let longitudActualMimn =-1; // Aux
    for(let i=0; i< matrizUno.length;i++){
        const elementoActual = matrizUno[i]; // arreglo 
        const longitudActual =elementoActual.length; // segunda dimension
        if(longitudActualMax < longitudActual){
            longitudActualMax = longitudActual
        }
        if(longitudActual < longitudActualMimn && longitudActualMimn >= 0){
            longitudActualMimn = longitudActual
        } else if(longitudActualMimn ==-1){
            longitudActualMimn = longitudActual
        } else if(longitudActual < longitudActualMimn){
            longitudActualMimn = longitudActual
        }      
    }
}

const arregloMatriz = [[1,2],[3,4,5],[8,9,8]]


function verificarTodosElementosDeUnArregloSonArreglo(arreglo: any[]){
    for(let i=0;i<arreglo.length;i++){
        const elementoActual = arreglo [i];
        const esUnArreglo =  typeof elementoActual == 'object' && elementoActual.indexOf;  //Truty
        if(!esUnArreglo){
            return false; // Cuando el indexOf --- -1 si no hay O null o undefined
        }
    }
    return true
}


function main(){
//compararMatriz()
}

const arreglo = [[1,8,9,10],[15,9,10,1]]; 