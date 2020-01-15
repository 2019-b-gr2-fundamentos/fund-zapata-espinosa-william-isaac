// 02 crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from 'prompts';

function main(){
    obtenerDatosAnimalPerrito();

}

function obtenerDatosAnimalPerrito(){
    /*
    Paradigma de programacion 
    SINCRONO VS ASINCRONA
   */
    console.log('Inicio ')
    const promesaEdad = prompts({  // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    })
    .then(
        datos=>{
            console.log('datos',datos); // AQUI PUEDO SEGUIR
            //
            // Codigo
            //
            const promesaNombre = prompts ({
                type: 'text',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
            });
            promesaNombre
            .then(
                (datos)=>{
                    console.log('Nombre',datos);
                }
            )
            .catch(
                (error)=>{
                    console.log('Error',error);
                }
            )
        
        }
    )
    console.log(promesaEdad)
    console.log('Fin')

}
main();