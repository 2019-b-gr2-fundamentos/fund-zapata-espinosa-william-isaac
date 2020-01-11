package main

import (
	"fmt"
)

func intercambiarDiagonal (matrizUno[][]float64) {
for i := 0; i < n; i++ {
	if i != n/2 {
	var auxlixiar = [i][i]float64
	matrizUno[i][i] = matrizUno[i][n - i - 1]
	matrizUno[i][n - i - 1] = auxlixiar
	}
	for i := 0;i < n ; i++ {
		for j := 0; j < n; j++ {
			fmt.Println("Resultado: ", matrizUno[i][j] )
		}
	} 
}
}

func main() {
	var x = [][]float64{{1,2},{3,4}}
	intercambiarDiagonal(x)
}
