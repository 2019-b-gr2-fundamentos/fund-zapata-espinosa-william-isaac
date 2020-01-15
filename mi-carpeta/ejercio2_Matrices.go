package main

import (
	"fmt"
)

func sumaElementosFila(matrizUno [][]float64) {
	var suma float64 = 0.00
	filas := len(matrizUno[0]) + 1
	columnas := len(matrizUno[1]) + 1
	for i := 0; i < filas; i++ {
		for j := 0; j < columnas; j++ {
			suma = suma + matrizUno[i][j]
		}
		fmt.Println("La suma de la fila es: ", suma)
	}
}
func sumaElementosColumna(matrizUno [][]float64) {
	var suma float64 = 0.00
	filas := len(matrizUno[0]) + 1
	columnas := len(matrizUno[1]) + 1
	for i := 0; i < filas; i++ {
		for j := 0; j < columnas; j++ {
			suma = suma + matrizUno[i][j]
		}
		fmt.Println("La suma de la columna es: ", suma)
	}
}

func main() {
	var x = [][]float64{{1, 2, 3}, {4, 5, 6}}
	var resultado1 = sumaElementosColumna(x)
	var resultado2 = sumaElementosFila(x)
	fmt.Println("Resultado: ", resultado1)
	fmt.Println("Resultado: ", resultado2)
}
