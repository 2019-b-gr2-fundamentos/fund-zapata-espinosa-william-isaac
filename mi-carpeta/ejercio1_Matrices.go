package main

import (
	"fmt"
)

func compararMatriz(
	matrizUno: float64[][],
	matrizDos: float64[][]
): bool {
	const esValido = tienenMatricesIgualesDimensiones (
		matrizUno,
		matrizDos
	)
	if(esValido){
		return tieneMismosValores(
			matrizUno,
			matrizDos
		)
	} else {
		return false
	}
}

func tienenMismosValores(
	matrizUno: float64[][],
	matrizDos: float64[][]
): bool{
	const primeraDimension = len(matrizUno)
	const segundaDimension = len(matrizUno[0])
	var banderaSonIguales = true
	for(var i=0;i< primeraDimension; i++){
		for(var j=0;j<segundaDimension;j++){
			const valorActualM1 = matrizUno[i][j]
			const valorActualM2 = matrizDos[i][j]
			if(valorActualM1 != valorActualM2){
				banderaSonIguales = false
			}
		}
	}
	return banderaSonIguales
}

func tienenMatricesIgualesDimensiones(
	matrizUno: float64[][],
	matrizDos: float64[][]
): bool {
	const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        )
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        )
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        )
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
		)
	const noHayFalsos = matrizUnoPrimeraDimension != false && 
    matrizUnoSegundaDimension != false &&
    matrizDosPrimeraDimension != false && 
	matrizDosSegundaDimension != false
	if(noHayFalsos){
        const tienenIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
        matrizUnoSegundaDimension == matrizDosSegundaDimension;
        if( tienenIgualesDimensiones ){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
	
}

func obtenerPrimeraDimension(matrizUno: float64[][]): bool | float64{
	const esValido = vericarTodosLosElementosdeUnArregloSonArreglo(matrizUno)
	if(esValido){
		const primeraDimensionArreglo = leg(matrizUno)
		return primeraDimensionArreglo
	} else {
		return false
	}
}

func obtenerSegundaDimension(matrizUno: float64[][]): bool | float64{
	const esValido = vericarTodosLosElementosdeUnArregloSonArreglo
	if(esValido){
		var longitudActualMaxima = 0
		var longitudActualMinima = -1
		for(var i=0; i<len(matrizUno;i++)){
			const elementoActual = matrizUno[i]
			const longitudActual = len(elementoActual)
			if(longitudActualMaxima < longitudActual){
				longitudActualMaxima = longitudActual
			} 
			if(longitudActualMinima == -1){
				longitudActualMinima = longitudActual
			} else {
				if(longitudActual < longitudActualMinima){
					longitudActualMinima = longitudActual
				}
			}
		}
		if(longitudActualMaxima != longitudActualMinima){
			return false
		} else {
			return len(matrizUno[0])
		}
	} else {
		return false
	}
}

func vericarTodosLosElementosdeUnArregloSonArreglo(
	arreglo: float64[]
) bool{
	for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        len(elementoActual)
        if(!esUnArreglo){
            return false
        }
    }
    return true
}

func main(){
	const x = [
        [1,2,3],
        [3,3,3]
    ];
    const y = [
        [1,2,3],
        [3,3,3]
    ];
	const resultado = compararMatriz(x, y);
	fmt.Println('Resultado: ',resultado)
}
