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


const numeroDeJugadores = 5;
const indicePrimerElemento = 0;
const indiceSegundoElemento = 1;
const indiceTercerElemento = 2;
const indiceCuartoElemento = 3;
const indiceQuintoElemento = 4;

for (const arreglo = []; arreglo.push(Math.floor(Math.random() * 2)) <= numeroDeJugadores;){
    if (arreglo[indicePrimerElemento] == 0 && arreglo[indiceSegundoElemento] == 0 && arreglo[indiceTercerElemento] == 0 && arreglo[indiceCuartoElemento] == 0 && arreglo[indiceQuintoElemento] == 0 ){
        console.log('Intente de nuevo');
    }else{
            console.log(arreglo);
        }
        }
    


/*
const arreglo = [200, 2, 3];
const indicePrimerElemento = 0;
const indiceSegundoElemento = 1;
const indiceTercerElemento = 2;
arreglo[indicePrimerElemento];
arreglo[indiceSegundoElemento];
arreglo[indiceTercerElemento];
console.log(arreglo[indicePrimerElemento]);
*/

/*
1. Definir el # de jugadores
2. Asignar randomicamente si tiene o no un floron
3. Verificar si almenos existe un floron
4. Adivinar donde esta el floron

*/
let arregloFloron1 = [0,0,0,0,1];
let existeFloron = false; 
for (let i=0; i<5; i++){  
 if(arregloFloron1[i]==1){
     existeFloron = true;
 }
}
if(existeFloron){
    console.log("Adivinar ");
} else {
    console.log("Asignar y luego adivinar ");
}