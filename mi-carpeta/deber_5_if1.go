// Saber si tienes que ir a vielar al final del semestre XD
package main

import (
	"fmt"
)

func main() {

	fmt.Println("Saber si tienes que ir a vielar al final del semestre")
	fmt.Println("Ingrese su primera nota: ")
	var n1 float64
	fmt.Scan(&n1)

	if n1 >= 2 && n1 <= 5 {
		fmt.Println("Mejor sigue ahorrando para la segunda matricula")
	} else if n1 > 5 && n1 <= 8 {
		fmt.Println("Sigue asi y pueda que vielas")
	} else if n1 > 8 && n1 <= 10 {
		fmt.Println("Anda este viernes a vielar : )")
	}
	fmt.Println("Ingrese su segunda nota: ")
	var n2 float64
	var resultado float64
	fmt.Scan(&n2)
	resultado = n1 + n2
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
