// for
/*
1 Declarar una variable
2 Condicion (Expresion )
3 Incrementar, Disminuir 
*/

for ( let numeroExCrush = 7; numeroExCrush > 0; numeroExCrush--){
console.log("ESCANDALO !!", numeroExCrush);  //  >0 o !=   False
}

for ( let numeroExCrush = 0; numeroExCrush <=6; numeroExCrush++){
    console.log("ESCANDALO !!", numeroExCrush);  //  >0 o !=   False
    }

// Arreglos

/*

1 Elemento (Variable const numero = 1)
Conjunto del Mismo elemnto ([1,2,3,4])
conjunto Diferentes elementos ([1,'abc',true])

Tienen: 
1 Elementos 
2 Indices (0 index based) -> POSICION
3 Longitud ->  numero de elementos

*/

const arregloNumeros = [1,2,3,4,5,6];
arregloNumeros.push(7); //Agregar al final
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop(); // Quitar al final
console.log('arregloNumeros', arregloNumeros);
console.log(arregloNumeros.length); // Da el numero de elementos 

// Acceder a cada elemnto del arreglo por el indice 
const indiceElementoCinco = 4; //5
arregloNumeros[indiceElementoCinco]
const indiceElementoUno = 4; //1
arregloNumeros[indiceElementoUno]
console.log(arregloNumeros[4]);
// For
/*
1) let = arregloNumeros.length // 5
2) tamaño > 0
3) --

*/


// Acceder al elemento 5
/*

1) INDICE 

[1,2,3,4,5]
 0 1 2 3 4

*/

console.log(arregloNumeros[indiceElementoCinco]);
// 5 
console.log(arregloNumeros[4])

// Jueguito
/*
1. Crear arreglo 5 elementos
2. Cada elemento 1 o un 0
Ej [0,0,1,1,0]
Exista al menos un elemento '1'
Ej [0,0,0,0,0] No es valido
   [0,0,0,0,1] Es valido


*/

