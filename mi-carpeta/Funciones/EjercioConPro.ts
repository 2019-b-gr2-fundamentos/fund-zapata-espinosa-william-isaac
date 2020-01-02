function compararMatriz(matrizUno:number[][],matrizDos:number[][]):boolean {
  const esValido = tieneMatricesIgualesDimensiones (matrizUno,matrizDos);
  if(esValido){
      // Comparar los valores
      return true
  } else {
      return false
  }
}
function tieneMatricesIgualesDimensiones(matrizUno: number [][] , matrizDos: number [][]): boolean{
    const matrizUnoPrimeraDimension = optenerPrimerDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = optenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = optenerPrimerDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = optenerSegundaDimension(
        matrizDos
        );
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    const noHayFalsos = matrizUnoPrimeraDimension != false && 
                        matrizDosPrimeraDimension != false && 
                        matrizUnoSegundaDimension != false && 
                        matrizDosSegundaDimension !=false
    const igualDimension = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
                           matrizUnoSegundaDimension == matrizDosSegundaDimension
    if(noHayFalsos) {
        if(igualDimension){
            return true;
        }
    }  else {
        return false;
    }
}

// VALIDACION 
function optenerPrimerDimension(matrizUno:number[][]):number | boolean{
    const esValido = verificarTodosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const optenerPrimerDimensionArreglo = matrizUno.length;
        return optenerPrimerDimensionArreglo;
    } else {
        return false;
    }
    
}


function optenerSegundaDimension(matrizUno:number[][]):number | boolean{
    const esValido = verificarTodosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMax =0; // Aux
    let longitudActualMimn =-1; // Aux
    if(esValido){
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
        if(longitudActualMax != longitudActualMimn){
            return false
        }else {
            return matrizUno[0].length;
        }
    } else {
        return false
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
function tienenMismosValores(matrizUno: number[][], matrizDos: number[][]): boolean{
const primeraDimension = matrizUno.length
const segundaDimension = matrizUno[0].length
let banderaSonIguales = true;
for(let i = 0;i<primeraDimension; i++){
    for(let j=0;j<segundaDimension; j++){
        const valorActualM1 = matrizUno[i][j]
        const valorActualM2 = matrizDos[i][j]
        if(valorActualM1 != valorActualM2){
            banderaSonIguales = false;
        }
    }
}
return banderaSonIguales;
}


function main(){
    const matrizUno = [
        [1,2],
        [3,3]
    ];
    const matrizDos = [
        [1,3],
        [3,4],
    ];
    const resultado = compararMatriz(matrizUno, matrizDos)
    console.log("Resultado: ", resultado)
}
main();