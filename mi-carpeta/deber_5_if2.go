// Mayor entre dos numeros
package main

import (
	"fmt"
)

func main() {
	fmt.Println("El mayor entre dos dumeros")
	var num1, num2 float64
	fmt.Println("Ingrese el primer numero: ")
	fmt.Scanln(&num1)
	fmt.Println("Ingrese el segundo numero: ")
	fmt.Scanln(&num2)
	if num1 > num2 {
		fmt.Println("El primero numero es el mayor: ", num1)
	} else {
		fmt.Println("El segundo numero es el mayor: ", num2)
	}
}
