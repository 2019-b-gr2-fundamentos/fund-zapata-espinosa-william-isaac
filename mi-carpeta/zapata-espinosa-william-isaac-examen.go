// Artistas
package main

import (
	"fmt"
)

func Artistas() {
	fmt.Println(".:Bienvenidos:.")
	fmt.Println("!!! Recuerde que el INDICE EMPIEZA desde la posicion CERO !!!")
	fmt.Println("Seleccione la accion que desea realizar sobre el registro")
	fmt.Println("1. Crear")
	fmt.Println("2. Actualizar")
	fmt.Println("3. Eliminar")
	fmt.Println("4. Salir")
	var opciones string
	fmt.Scanln(&opciones)
	var esCrear bool = opciones == "crear" || opciones == "1" || opciones == "1. Crear"
	var esActualizar bool = opciones == "actualizar" || opciones == "2" || opciones == "2. Actualizar"
	var esEliminar bool = opciones == "eliminar" || opciones == "3" || opciones == "3. Eliminar"
	var esSalir bool = opciones == "salir" || opciones == "4" || opciones == "4. Salir"
	var estaValido bool = esCrear || esActualizar || esEliminar

	if estaValido {
		fmt.Println("El registro es: ")
		artistas := []string{"Queen", "AC/DC", "Black Sabbath"}
		fmt.Printf("%q\n", artistas)
		if esCrear {
			fmt.Println("Ingrese el nuevo Artista: ")
			var nuevoArtista string
			fmt.Scanln(&nuevoArtista)
			artistas = append(artistas, nuevoArtista)

		}
		if esActualizar {
			fmt.Println("Ingrese el indice del elemento que desea actualizar")
			var indice int
			fmt.Scanln(&indice)
			fmt.Println("Ingrese el nuevo Artista")
			var artistaActualizado string
			fmt.Scanln(&artistaActualizado)
			artistas[indice] = artistaActualizado
		}
		if esEliminar {
			fmt.Println("Ingrese el indice del elemento a eliminar")
			var indice int
			fmt.Scanln(&indice)
			var continuacionIndice int
			continuacionIndice = indice + 1
			artistas = append(artistas[:indice], artistas[continuacionIndice:]...)
		}
		fmt.Printf("%q\n", artistas)
		Artistas()
	} else {
		if esSalir {
			fmt.Println("Eres tu no soy yo :.(")
		} else {
			Artistas()
		}
	}

}
func main() {
	Artistas()
}
