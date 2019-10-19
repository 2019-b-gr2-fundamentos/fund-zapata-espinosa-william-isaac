package main

import (
	"fmt"
)

/*

Autor: William Zapata
Fecha actializacion: 19/10/19
Descripcion: Ejemplos de variables primitivas
Int --- Numero Entero
Char --- hola
Float(64 y 32) – número decimales 3.14
comple(x64 y x128) --- Números complejos con float32/64 partes reales e imaginarias
Boolean – V o F
String – cadena de caracteres /arreglos

*/

func main() {

	// `var` se usa para declarar una o más variables.
	var a string = "inicial"
	fmt.Println(a)

	// Puedes declarar múltiples variables en una línea.
	var b, c int = 1, 2
	fmt.Println(b, c)

	// Go infiere el tipo de las variables inicializadas.
	var d = true
	fmt.Println(d)
}
