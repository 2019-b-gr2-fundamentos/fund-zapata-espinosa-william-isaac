/*
1 Analisis -> 190
2 Algebra -> 192
3 Compiladores -> 194
5 Fundamentos -> 144
7 Calculo -> 120
11 Fisica -> 84
13 Ingles ->76

Si es impar le aumentamos a Analisis // 17
Si es par le aumentamos a Algebra // 17
Si es multiplo de 3 aumento a Compiladores //16

Cuantos deberes hicieron del 1 a 1000
*/
package main

import (
	"fmt"
)

func main() {

	var Analisis = 0
	var Algebra = 0
	var Compiladores = 0
	var Fundamentos = 0
	var Calculo = 0
	var Fisica = 0
	var Ingles = 0

	for deberes := 0; deberes < 1000; deberes++ {
		if deberes%13 == 0 {
			Ingles = Ingles + 1
		} else if deberes%11 == 0 {
			Fisica = Fisica + 1
		} else if deberes%7 == 0 {
			Calculo = Calculo + 1
		} else if deberes%5 == 0 {
			Fundamentos = Fundamentos + 1
		} else if deberes%3 == 0 {
			Compiladores = Compiladores + 1
		} else if deberes%2 == 0 {
			Algebra = Algebra + 1
		} else if deberes%2 != 0 {
			Analisis = Analisis + 1
		}

	}

	fmt.Println("El numero de deberes realiza de Analisis es: ", Analisis)
	fmt.Println("El numero de deberes realiza de Algebra es: ", Algebra)
	fmt.Println("El numero de deberes realiza de Calculo es: ", Calculo)
	fmt.Println("El numero de deberes realiza de Compiladores es: ", Compiladores)
	fmt.Println("El numero de deberes realiza de Fisica es: ", Fisica)
	fmt.Println("El numero de deberes realiza de Fundamentos es: ", Fundamentos)
	fmt.Println("El numero de deberes realiza de Ingles es: ", Ingles)

}
