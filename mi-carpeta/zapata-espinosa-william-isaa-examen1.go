package main

import (
	"fmt"
)

func sumar(numUno, numDos int) int {
	return numUno + numDos
}
func restar(numUno, numDos int) int {
	return numUno - numDos
}
func multiplicar(numUno, numDos int) int {
	return numUno * numDos
}
func dividir(numUno, numDos int) int {
	return numUno / numDos
}
func volumenCono(radio, altura int) int {
	return 1 / 3(3.1416)(radio)(radio)(altura)
}
func conversion(gramos int) int {
	return gramos * 1000
}
func main() {
	calculadora()
}
func calculadora() {
	fmt.Println(".:Bienvenidos:.")
	fmt.Println("1. Suma")
	fmt.Println("2. Resta")
	fmt.Println("3. Multiplicacion")
	fmt.Println("4. Divisicion")
	fmt.Println("5. Volumen de un cono")
	fmt.Println("6. Conversion: g a kg")
	fmt.Println("7. ")
	fmt.Println("8. ")
	fmt.Println("9. ")
	fmt.Println("10. ")
	fmt.Println("11. Salir")
	fmt.Println("Ingrese la operacion desea")
	var opciones string
	fmt.Scanln(&opciones)
	var esSuma bool = opciones == "suma" || opciones == "1" || opciones == "1. Suma"
	var esResta bool = opciones == "resta" || opciones == "2" || opciones == "2. Resta"
	var esMultiplicacion bool = opciones == "multiplicacion" || opciones == "3" || opciones == "3. Multiplicacion"
	var esDivision bool = opciones == "division" || opciones == "4" || opciones == "4. Divisicion"
	var esVolumen bool = opciones == "volumen de un cono" || opciones == "5" || opciones == "5." || opciones == "5. Volumen de un cono"
	var esConversion bool = opciones == "conversion" || opciones == "6" || opciones == "6. Conversion: g a kg"
	//var esSum bool = opciones == "s" || opciones == "7" || opciones == "7. Suma"
	//var esSu bool = opciones == "s0" || opciones == "8" || opciones == "8. Suma"
	//var esS bool = opciones == "s01" || opciones == "9" || opciones == "9. Suma"
	//var vares bool = opciones == "s02" || opciones == "10" || opciones == "10. Suma"
	var esSalir bool = opciones == "salir" || opciones == "11" || opciones == "11." || opciones == "11. Salir"
	var estaValida bool = esSuma || esMultiplicacion || esResta || esDivision || esConversion || //esVolumen || esS || esSu || es || esSum
	if estaValida {
		fmt.Println("Ingrese el primer numero: ")
		var numUno = 0
		fmt.Scanln(&numUno)
		fmt.Println("Ingrese el segundo numero: ")
		var numDos = 0
		fmt.Scanln(&numDos)
		var resultado = 0
		var gramos = 0
		if esSuma {
			resultado = sumar(numUno, numDos)
		}
		if esResta {
			resultado = restar(numUno, numDos)
		}
		if esMultiplicacion {
			resultado = multiplicar(numUno, numDos)
		}
		if esDivision {
			resultado = dividir(numUno, numDos)
		}
		if esConversion {
			resultado = conversion(gramos)
		}
		fmt.Println("El resultado es: ", resultado)
		calculadora()
	} else {
		if esSalir {
			fmt.Println("Eres tu no soy yo :.(")
		} else {
			calculadora()
		}
	}

}
