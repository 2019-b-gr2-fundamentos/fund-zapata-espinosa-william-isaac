
import * as prompts from '';
import { Bandas } from '.';
let id = 1;
let Bandas: Bandas[] = [];

async function crearDatosBandas(){
    const preguntasBandas = [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Inserte el nombre del vocalista'
        },
        {
            type: 'text',
            name: 'anio',
            message: 'Inserte el anio de creacion'
        },
        {
            type: 'text',
            name: 'album',
            message: 'Inserte el nombre del primer album'
        },
        {
            type: 'text',
            name: 'cancion',
            message: 'Inserte el nombre de la primera cancion publicada'
        },
        {
            type: 'text',
            name: 'integrantes',
            message: 'Ingrese los integrantes del grupo'
        }
];
    const respuestaPreguntas = await prompts(preguntasBandas);
    const nuevoRegistroBandas = {
        Aid: id,
        Nombre: respuestaPreguntas.Nombre,
        SuperHeroe: respuestaPreguntas.anio,
        SuperPoder: respuestaPreguntas.album,
        Grupo: respuestaPreguntas.cancion,
        Ciudad: respuestaPreguntas.integrantes
    };
    id = id + 1;
    Bandas.push(nuevoRegistroBandas);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que desea hacer? \n 1-crear otro registro \n 2-leer los registros actuales \n 3-actualizar datos \n 4-eliminar registros \n 5-SALIR'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosBandas().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarRegistro().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('ADIOS');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Registro de Bandas:', Bandas);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const AidAEditar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid de la Banda cuya informacion desea editar'
    });
    const AidEncontrado = Bandas.findIndex(
        function(valorActual){
        return valorActual.Aid == AidAEditar.Aid
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que campo desea editar?'
    });
    const respuestaCampo = queDeseaEditar.campoAEditar;
    if(respuestaCampo == 'Nombre'){
        const nuevoNombre = await prompts({
            type: 'text',
            name: 'nuevoNombre',
            message: 'Ingrese el nombre de la nueva banda'
        });
        Bandas[AidEncontrado].Nombre = nuevoNombre.nuevoNombre;
    }else if(respuestaCampo == 'anio'){
        const nuevoBanda = await prompts({
            type: 'text',
            name: 'nuevoAnio',
            message: 'Ingrese el anio de la nueva banda de creacion'
        });
        Bandas[AidEncontrado].nuevoAnio = nuevoBanda.nuevoAnio;
    }else if(respuestaCampo == 'album'){
        const nuevoAlbum = await prompts({
            type: 'text',
            name: 'nuevoAlbum',
            message: 'Ingrese el nuevo SuperPoder'
        });
        Bandas[AidEncontrado].album = .nuevoBanda;
    }else if(respuestaCampo == 'Grupo'){
        const nuevoGrupo = await prompts({
            type: 'text',
            name: 'newGroup',
            message: 'Ingrese el nuevo grupo al que pertenece el Vengador'
        });
        Bandas[AidEncontrado].Grupo = nuevoGrupo.newGroup;
    }else if(respuestaCampo == 'Ciudad'){
        const nuevaCiudad = await prompts({
            type: 'text',
            name: 'City',
            message: 'Ingrese la nueva ciudad'
        });
        Bandas[AidEncontrado].Ciudad = nuevaCiudad.City;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de Vengadores actualizado es:', Bandas);
    queDeseaHacer().then().catch();
    return Bandas
};
async function eliminarRegistro(){
    const AidAEliminar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid del Vengador cuya informacion desea eliminar'
    });
    const AidEncontrado = Bandas.findIndex(
        function(valorActual){
        return valorActual.Aid == AidAEliminar.Aid
        }
    );
    Bandas.splice(AidEncontrado, 1);
    console.log('El nuevo registro de las bandas  es:', Bandas);
    queDeseaHacer().then().catch();
    return Bandas
}

function main(){
    crearDatosBandas().then().catch();

}

main();