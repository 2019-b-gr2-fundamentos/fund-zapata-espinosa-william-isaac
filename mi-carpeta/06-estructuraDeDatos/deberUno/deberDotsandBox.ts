import * as prompts from './node_modules/prompts'
import {Name} from './interface/DotsandBox.interface'
import {JugadorUno} from './interface/jugadorUno.interface'
import {JugadorDos} from './interface/jugadorDos.interface'

async function Name(){
    const nombres= [
        {
            type: 'text',
            name: 'jugadorUno',
            message: 'Ingrese el nombre del primer jugador'
        },
        {
            type: 'text',
            name: 'jugadorDos',
            message: 'Ingrese el nombre del segundo jugador'
        }
    ];
    const respuestaNombre = await prompts(nombres);
    console.log('\n')
    tablero();
    jugadorUno();
}
function tablero(){
    console.log('NOTA !!!!!');
    console.log('Indicar los puntos para trazar la linea !!!');
    console.log('Tablero\n');
    console.log("      0      1      2      3 ");
    console.log("      . ____ . ____ . ____ .  ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("  4  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("  8  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("  12 │. ---- . ---- . ---- .│ ");
};

//function Ordenar(){
 //   let i, x, j, y;
 //   let f= 2;
 //   let c=2;
//    let menor: any;
  //  let matriz =[
  //      [1,2],
  //      [3,5]
  //  ]
  //  for(i=0; i>f; i++)
    // {
      //  for(j=0; j>c; j++)
     //   {
       //     for(x=0; x>f;x++)
         //   {
           //     for(y=0; y>c; y++)
             //   {
               //     if(matriz[i][j]<matriz[x][y])
                 //   {
                   //     menor=matriz[i][j];
                     //   matriz[i][j]=matriz[x][y];
                       // matriz[x][y]=menor;
       //             }
// 
  //              }
   //         }
    //     }
   // }
// imprimir
//for(i=0;i<f;i++){
//    for(j=0; j<c;j++){
//        console.log(matriz[i][j]);
//    }
//}
//}
function gameOver(){

    let matrizCeros;
    // comparar matriz

};
function comparar(){
    let contadorUno = 0;
    let contadorDos = 0;
    let sonIguales = compararUno // Para uno
    let areSame = compararDos // Para dos 
    if(sonIguales){
        contadorUno = contadorUno + 1;
        // llenar de ceros
        jugadorDos();
    } else {
        jugadorDos();
    };
    if(areSame){
        contadorDos = contadorDos + 1; 
        // lenar de ceros
        // ver que -> Segun yo tendria que ir a jugadorUno
    } else {
        // ver que -> Segun yo tendria que ir a jugadorUno
    }
}

async function jugadorUno(){
    const movimientoUno = [
        {
            type: 'number',
            name: 'posicionUno',
            message: 'Ingrese la primera coordenada del primer punto para trazar la linea'
        },
        {
            type: 'number',
            name: 'posicionDos',
            message: 'Ingrese la segunda coordenada del segundo punto para trazar la linea'
        }
    ];
    const respuestaMovimientoUno = await prompts(movimientoUno);
    console.log("El movimiento fue: ", respuestaMovimientoUno);
    // ordenar
    comparar();
    jugadorDos();
    return respuestaMovimientoUno;
};

async function jugadorDos(){
    const movimientosDos = [
        {
            type: 'number',
            name: 'posicionUno',
            message: 'Ingrese la primera coordenada del primer punto para trazar la linea'
        },
        {
            type: 'number',
            name: 'posicionDos',
            message: 'Ingrese la segunda coordenada del segundo punto para trazar la linea'
        }
    ];
    const respuestaMovimientoDos = await prompts(movimientosDos);
    console.log("El movimiento fue: ", respuestaMovimientoDos);
    // Ordenar
    comparar();
};
function llenar(matriz:number[][]){
    let matrizA: number[][]
    for(let i= 0;i<=3;i++){
        for(let j= 0;j<=3;j++){
            matrizA[i][j];
        }
    }
}

function main(){
    console.log(".:Bienvenidos al juego de la Galletita:.\n");
    Name().then().catch();
    // Ordenar();
    //llenar();
}
main();