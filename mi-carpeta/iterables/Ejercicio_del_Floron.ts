// Jueguito
/*
1. Crear arreglo 5 elementos
2. Cada elemento 1 o un 0
Ej [0,0,1,1,0]
Exista al menos un elemento '1'
Ej [0,0,0,0,0] No es valido
   [0,0,0,0,1] Es valido

   1 floron 
   0 no 
*/

Math.floor(Math.random()* 2) // [0,2[


let elementos = [];
let indice = 0;
let jugadores = 2;
for (elementos =0 ;elementos<jugadores; elementos ++){
    nuevoElementos.push(Math.floor(Math.random()* 2));
    console.log('Son: ',nuevoElementos);

}
