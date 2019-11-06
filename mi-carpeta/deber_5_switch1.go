// Juego para que adivinen tu color favorito
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Bienvenidos")
	fmt.Println("Ingrese su color favorito")
	var colorfavorto string
	fmt.Scanln(&colorfavorto)
	switch colorfavorto {
	case "amarillo":
		fmt.Println("CORRECTO !!")
	case "rojo":
		fmt.Println("CORRECTO !!")
	case "azul":
		fmt.Println("CORRECTO !!")
	case "anaranjado":
		fmt.Println("CORRECTO !!")
	case "rosado":
		fmt.Println("CORRECTO !!")
	case "celeste":
		fmt.Println("CORRECTO !!")
	case "cafe":
		fmt.Println("CORRECTO !!")
	case "blanco":
		fmt.Println("CORRECTO !!")
	case "verde":
		fmt.Println("CORRECTO !!")
	case "morado":
		fmt.Println("CORRECTO !!")
	case "negro":
		fmt.Println("CORRECTO !!")
	default:
		fmt.Println("NOOOOOOOO, Que pena!!!")

	}

}
