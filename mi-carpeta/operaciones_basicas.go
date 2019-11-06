// Calculadora
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Bienvenidos que operacion desea realizar")
	fmt.Println("1. Suma")
	fmt.Println("2. Resta")
	fmt.Println("3. Multiplicaion")
	fmt.Println("4. Division")
	fmt.Println("5. Transformar de kg a g")
	fmt.Println("6. Salir")
	var op int
	fmt.Scanln(&op)
	var resultado, n1, n2 float64
	switch op {
	case 1:
		fmt.Println("Ingrese su primer numero: ")
		fmt.Scanln(&n1)
		fmt.Println("Ingrese su segundo numero: ")
		fmt.Scanln(&n2)
		resultado = n1 + n2
		fmt.Println("El resultado es: ", resultado)
	case 2:
		fmt.Println("Ingrese su primer numero: ")
		fmt.Scanln(&n1)
		fmt.Println("Ingrese su segundo numero: ")
		fmt.Scanln(&n2)
		resultado = n1 - n2
		fmt.Println("El resultado es: ", resultado)
	case 3:
		fmt.Println("Ingrese su primer numero: ")
		fmt.Scanln(&n1)
		fmt.Println("Ingrese su segundo numero: ")
		fmt.Scanln(&n2)
		resultado = n1 * n2
		fmt.Println("El resultado es: ", resultado)
	case 4:
		fmt.Println("Ingrese su primer numero: ")
		fmt.Scanln(&n1)
		fmt.Println("Ingrese su segundo numero: ")
		fmt.Scanln(&n2)
		resultado = n1 / n2
		fmt.Println("El resultado es: ", resultado)
	case 5:
		fmt.Println("Ingrese la cantidad en g: ")
		fmt.Scanln(&n1)
		resultado = n1 * 1000
		fmt.Println("El resultado en kg es: ", resultado)
	case 6:
		fmt.Println("Adioos !!!")
	default:
		fmt.Println("Revise la opcion ingresada!!")

	}

}
