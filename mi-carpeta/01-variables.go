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

los siguiente describe quien son imnutables

immutable fields
immutable methods
immutable arguments
immutable return values
immutable variables
immutable interfaces
immutable reference types and containers
immutable package-scope variables

leer

Mutable Go objects:

arrays and slices
maps
channels
closures which are capturing at least 1 variable from the outer scope

Immutable Go objects:

interfaces
booleans, numeric values (including values of type int)
strings
pointers
function pointers, and closures which can be reduced to function pointers
structs having a single field
Go objects which some people may consider mutable, while other people may consider them immutable:

structs having multiple fields

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

	var e float64 = 36.98
	fmt.Println(e)
}
