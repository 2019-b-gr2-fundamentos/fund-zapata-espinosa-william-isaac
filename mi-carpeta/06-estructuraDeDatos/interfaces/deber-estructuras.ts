import * as prompts from 'prompts';

function main(){

}

async function bandas(){
    const preguntas = [
        {
            type: 'text',
            name: 'nombreBanda',
            message: 'Puedes darme el nombre de la banda?'
        },
        {
            type: 'text',
            name: 'nombreVocalista',
            message: 'Puedes darme el nombre del vocalista ?'
        },
        {
            type: 'text',
            name: 'genero',
            message: 'Cual es el genero?'
        },
        {
            type: 'text',
            name: 'primerAlbum',
            message: 'Cual es el primer Album?'
        },
        {
            type: 'text',
            name: 'anioCreacion',
            message: 'Cual es el anio de formacion?'
        }
    ]
    const respuesta = await prompts(preguntas);
    console.log('Respuesta', respuesta);
    console.log('Fin');
}