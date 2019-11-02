// Saber si tienes que ir a vielar al final del semestre XD
package main

import (
	"fmt"
	"strconv"
)

func main() {

	fmt.Println("Saber si tienes que ir a vielar al final del semestre")
	fmt.Printf("Ingrese su primera nota: ")
	var n1 string
	fmt.Scan(&n1)
	fltStr, _ := strconv.ParseFloat("n1", 64)
	if fltStr >= 2 && fltStr <= 5 {
		fmt.Printf("Mejor sigue ahorrando para la segunda matricula")
	} else if fltStr > 5 && fltStr <= 8 {
		fmt.Printf("Sigue asi y pueda que vielas")
	} else if fltStr > 8 && fltStr <= 10 {
		fmt.Println("Anda este viernes a vielar : )")
	}
	fmt.Printf("Ingrese su segunda nota: ")
	var n2 string
	var resultado float64
	fmt.Scan(&n2)
	fltStr2, _ := strconv.ParseFloat("n2", 64)
	resultado = fltStr + fltStr2
	if resultado >= 8.5 && resultado <= 8.9 {
		fmt.Println("Anda pegate la arrodillada de tu vida para llegar al suple")
	} else if resultado > 8.9 && resultado <= 13.4 {
		fmt.Println("Chao viela :(")
	} else if resultado >= 13.5 && resultado <= 13.9 {
		fmt.Println("Ruega al ing que te hanga pasar e invitale la viela")
	} else if resultado >= 14 && resultado <= 20 {
		fmt.Println("Anda viela como dios manda")
	}

}
