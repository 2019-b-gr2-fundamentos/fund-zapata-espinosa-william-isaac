package main

import (
	"fmt"
)

func sumar(numUno, numDos float64) float64 {
	return numUno + numDos
}
func restar(numUno, numDos float64) float64 {
	return numUno - numDos
}
func multiplicar(numUno, numDos float64) float64 {
	return numUno * numDos
}
func dividir(numUno, numDos float64) float64 {
	return numUno / numDos
}
func volumenCono(radio, altura float64) float64 {
	return 1 / 3(3.1416)(radio)(radio)(altura)
}
func conversion(gramos float64) float64 {
	return gramos * 1000
}
func MetodoDeNewton(numUno float64, inicia int, margen float64) float64 {
	var respuesta float64 = 0
	var z float64
	var dif float64
	//Cambiar z al entero cuadrado inferior a x para calcular
	//otras raices
	if inicia == 1 {
		z = 1
	}
	//fin semilla
	if inicia == 0 {
		z = numUno
	}
	//Para calcular otra raíz cambiar el primer 2 por
	//el numero cuya raiz cuadrada se desea calcular
	z = (z + 2/z) / 2
	dif = numUno - z
	if dif > margen {
		respuesta = MetodoDeNewton(z, 0, margen)
	} else {
		respuesta = z
	}
	return respuesta
}

func calculadora() {
	fmt.Println(".:Bienvenidos:.")
	fmt.Println("1. Suma")
	fmt.Println("2. Resta")
	fmt.Println("3. Multiplicacion")
	fmt.Println("4. Divisicion")
	fmt.Println("5. Volumen de un cono")
	fmt.Println("6. Conversion: g a kg")
	fmt.Println("7. Raiz cuadrada ")
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
	var esRaizCuadrada bool = opciones == "raiz cuadrada" || opciones == "7" || opciones == "7. Raiz cuadrada"
	//var esSu bool = opciones == "s0" || opciones == "8" || opciones == "8. Suma"
	//var esS bool = opciones == "s01" || opciones == "9" || opciones == "9. Suma"
	//var vares bool = opciones == "s02" || opciones == "10" || opciones == "10. Suma"
	var esSalir bool = opciones == "salir" || opciones == "11" || opciones == "11. Salir"
	var estaValida bool = esSuma || esMultiplicacion || esResta || esDivision || esConversion || esRaizCuadrada // || esS || esSu || es || esSum
	if estaValida {
		fmt.Println("Ingrese el primer numero: ")
		var numUno float64 = 0
		fmt.Scanln(&numUno)
		fmt.Println("Ingrese el segundo numero: ")
		var numDos float64 = 0
		fmt.Scanln(&numDos)
		var resultado float64 = 0
		var gramos float64 = 0
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
		if esRaizCuadrada {

			resultado = MetodoDeNewton(numUno, 1, 0000001)
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

func main() {
	calculadora()
}
