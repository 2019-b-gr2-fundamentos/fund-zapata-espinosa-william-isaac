package main

import (
	"fmt"
	"math"
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
func volumenCono(numUno, numDos float64) float64 {
	return (1 / 3)(3.1415)(numUno)(math.Pow(numDos, 2))
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
func Iva(numUno float64) float64 {
	return numUno * 0.12
}
func Hipotenusa(numUno, numDos float64) float64 {
	return math.Sqrt(math.Pow(numUno, 2) + math.Pow(numDos, 2))
}
func AporteIESS(numUno float64) float64 {
	return numUno * (9.45 / 100)
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
	fmt.Println("8. Calcular el iva")
	fmt.Println("9. Calcular la hipotenusa")
	fmt.Println("10. Calcular aporte el aporte al IESS")
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
	var esIva bool = opciones == "calcular el iva" || opciones == "8" || opciones == "8. Calcular el iva"
	var esHipotenusa bool = opciones == "calcular la hipotenusa" || opciones == "9" || opciones == "9. Calcular la hipotenusa"
	var esAporteIess bool = opciones == "calcular aporte del IESS" || opciones == "10" || opciones == "10. Calcular el aporte al IESS"
	var esSalir bool = opciones == "salir" || opciones == "11" || opciones == "11. Salir"
	var estaValida bool = esSuma || esMultiplicacion || esResta || esDivision || esConversion || esRaizCuadrada || esIva || esVolumen || esHipotenusa || esAporteIess
	if estaValida {
		fmt.Println("Ingrese el primer numero: ")
		var numUno float64 = 0
		fmt.Scanln(&numUno)
		fmt.Println("Ingrese el segundo numero: ")
		fmt.Println("Si es la !! opcion 8 !! tener presente que el primer dato ingresado es la altura y el segundo dato es el radio")
		fmt.Println("Si es la !! opcion 10 !! debe ingresar el salario del trabajador")
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
		if esIva {
			resultado = Iva(numUno)
		}
		if esHipotenusa {
			fmt.Println("Gracias por ingresar los dos catetos :.) ")
			resultado = Hipotenusa(numUno, numDos)
		}
		if esVolumen {
			fmt.Println("El primer dato ingresado es la altura y el segundo dato es el radio")
			resultado = volumenCono(numUno, numDos)
		}
		if esAporteIess {
			fmt.Println("Este aporte es para un trabajador no para el empleador, por eso se pide el salario del trabajador")
			resultado = AporteIESS(numUno)
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
