// Saber si ya estas hecho papel higenico (estas ebrio)
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Saber si ya estas hecho papel higenico")
	fmt.Println("Ingrese el numero de cervezas que hay bebido: ")
	var nuvi, resp int
	fmt.Scanln(&nuvi)
	if nuvi >= 1 && nuvi <= 3 {
		fmt.Println("Todavia jalas !!")
	} else if nuvi > 3 && nuvi <= 5 {
		fmt.Println("(Si 1/ No 0) / Quiere llamar a su ex ")
		fmt.Scanln(&resp)
		if resp != 1 && resp != 0 {
			fmt.Println("Revise su respuesta !!")
		} else if resp == 1 {
			fmt.Println("Que pendej@ anda a ver mejor master chef")
		} else {
			fmt.Println("Muy bien")
		}
		fmt.Println("(Si 1/ No 0) / Puede hablar ")
		fmt.Scanln(&resp)
		if resp != 1 && resp != 0 {
			fmt.Println("Revise su respuesta !!")
		} else if resp == 1 {
			fmt.Println("Una cerveza más")
		} else {
			fmt.Println("Dile a alguien que te de pidiendo un taxi/uber y andate a dormir")
		}
		fmt.Println("(Si 1/ No 0)  Puede caminar ")
		fmt.Scanln(&resp)
		if resp != 1 && resp != 0 {
			fmt.Println("Revise su respuesta !!")
		} else if resp == 1 {
			fmt.Println("Una cerveza más")
		} else {
			fmt.Println("Dile a alguien que te de pidiendo un taxi/uber y andate a dormir")
		}

	} else if nuvi > 5 {
		fmt.Println("Mejor pide taxi/uber y andate a dormir  ")
	}

}
