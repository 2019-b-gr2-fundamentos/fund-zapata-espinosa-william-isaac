import * as prompts from './node_modules/prompts'
import {Name} from './interface/DotsandBox.interface'
async function Name(){
    const respuesta = await prompts({
        type: 'text',
        name: 'respuesta',
        message: '¿Cual es su nombre de Jugador?'
    });
    console.log('Su nombre de Jugador es : ',respuesta)
    console.log('\n')
    tablero();
}
function tablero(){
    console.log('NOTA !!!!!');
    console.log('Indicar las coordenadas en X y en Y !!!');
    console.log('Para indicar el sentido movimiento: ');
    console.log('Si es VERTICAL v y si es HORIZONTAL h');
    console.log('Tablero\n');
    console.log("     0,0    0,1    0,2    0,3 ");
    console.log("      . ____ . ____ . ____ .  ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("1,0  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("2,0  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("3,0  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("      . ---- . ---- . ---- .  ");
    
}

function main(){
    console.log(".:Bienvenido:.\n");
    Name().then().catch();
}
main();