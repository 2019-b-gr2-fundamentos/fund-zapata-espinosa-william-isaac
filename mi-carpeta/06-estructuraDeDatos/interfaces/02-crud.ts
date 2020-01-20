// 02 crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from 'prompts';
import { RespuestaEdad } from './respuesta-edad.interface';
import { RespuestaNombre } from './respuesta-nombre.interface';
import { RespuestaCedula } from './respuesta-cedula.interface';

function main(){
    // obtenerDatosAnimalPerrito(); // Asincrona
    obtenerDatosAnimalPerritoSincrona()
    .then()
    .catch(); // -> Promesa // Sincrona

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
    console.log('Fin')

}

async function obtenerDatosAnimalPerritoSincrona(){
    /*
    Paradigma de programacion 
    SINCRONO VS ASINCRONA
   */
    console.log('Inicio ')
    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        }
    ]
    //const edad: RespuestaEdad = await prompts({  // PROMESA
       // type: 'number',
       // name: 'edad',
       // message: 'Puedes darme tu edad?'
    //});
    //const nombre: RespuestaNombre = await prompts({  // PROMESA
        //type: 'text',
       // name: 'nombre',
        //message: 'Puedes darme tu nombre?'
    //});
    //const cedula: RespuestaCedula = await prompts({  // PROMESA
      //  type: 'number',
      //  name: 'cedula',
      //  message: 'Puedes darme tu cedula?'
    //});
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta', respuestaEdad);
    console.log('Fin');
}

main();