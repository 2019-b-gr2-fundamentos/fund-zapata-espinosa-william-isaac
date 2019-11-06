// Adivinanzas
package main

import (
	"fmt"
)

func main() {
	fmt.Println("\nBienvenidos\n")
	fmt.Println("A contunuacion la adivinaza: ")
	fmt.Println("Blanco por dentro, verde por fuera. Siqueres que te diga, espera")
	var fruta string
	fmt.Scanln(&fruta)
	switch fruta {
	case "la perra":
		fmt.Println("CORRECTO !!!")
	default:
		fmt.Println("NoOoOoOoOoO : ( ")
	}

	fmt.Println("\nBienvenidos\n")
	fmt.Println("A contunuacion la segunda adivinaza: ")
	fmt.Println("Figura redonda, cuerpo colorado, tripas de hueso y zancos de palo")
	var fruta2 string
	fmt.Scanln(&fruta2)
	switch fruta2 {
	case "la cereza":
		fmt.Println("CORRECTO !!!")
	default:
		fmt.Println("NoOoOoOoOoO : ( ")
	}

}
