// Baul de los recuerdos musica
package main
import (
	"fmt"
)
func main(){
	fmt.Println("Bienvedidos, conoce mas datos interesantes de los generos de musica")
	fmt.Println("1.Rock")
	fmt.Println("2.Pop")
	fmt.Println("3.Reggaeton")
	fmt.Println("4.Rap")
	var res int
fmt.Scanln(&res)
switch res {
case 1:
	fmt.Println("Las 3 mejores bandas del Rock de todos los tiempos son: Queen, Rolling Stones y Pink Floyd")
	fmt.Println("Las 3 canciones mas escuchadas de Rock es: Stairway to Heaven, Back in Black, Bohemian Rhapsody")
case 2:
	fmt.Println("Las 3 mejores bandas mas famosas de Pop son: Ov7, RBD, Katy Perry y Michael Jakson")
	fmt.Println("Un dato curioso es que Katy Perry tiene el mismo record de sencillos que Michael Jakson")
case 3:
	fmt.Println("Los cantantes mas destacados del Reggaeton son: Daddy Yanke, Don Omar, Tego Calderon y Tito el Bambino")
	fmt.Println("Las canciones más escuchadas en este año: Felices los 4, Vacaciones, Krippy Crush y 11 pm")
case 4:
	fmt.Println("Los mejores raperos del mundo: Eminem, Porta, Canserbero y Nach")
	fmt.Println("Las canciones más sonadas son Stan, Juicy, bella y bestia y It was a Good day")
}
default:
fmt.Println("ERROR, revise el numero ingresado")

}