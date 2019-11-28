const arregloDosDimensiones =
[
    [1,2,3,4],
    [4,5,6,7]
]
arregloDosDimensiones [0][0] // 1
arregloDosDimensiones [0][1] // 2
arregloDosDimensiones [1][0] // 4
arregloDosDimensiones[1][1] // 5


/*
multiplicar el 0* n elemento // n -> indice
multiplicar el 0 + 1 * n-1 elemento +
multiplicar el 0 + 2 * n-2 elemento -

*/

function productoCruz(vectores: number [][], indice, longitud){ 
longitud = arregloDosDimensiones[1].length
indice = arregloDosDimensiones[0].length
let suma = 0;
let longitudv = 3;
let multiplicado = 0; 
for(indice = 0;indice <=3; indice++){
longitud = longitudv - 1;
multiplicado = arregloDosDimensiones[0][indice] * arregloDosDimensiones[1][longitud]
suma =suma + multiplicado

}


}

function main(){
 
}

/*
1. definir el tamaño
2. repetir calculo N veces (N = tamaño)
3.1. 1er elemento 1er arreglo
3.2. ultimo elemento del 2 arreglo
3.3. sumar los elementos 
3.4. 1er elemento +1= 2do elemento 1er arreglo
3.5. ultimo elemento -1 = penultimo del 2do arreglo
3.6. sumar los elementos 

*/