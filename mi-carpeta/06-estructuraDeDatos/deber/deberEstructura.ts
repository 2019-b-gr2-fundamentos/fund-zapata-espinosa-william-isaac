import * as prompts from './node_modules/prompts'
import { Banda } from './interface/bandas.interface'
let id = 1;
let Bandas: Banda[] = [];
async function crearDatosBandas(){
    const preguntasBandas = [
        {
            type: 'text',
            name: 'nombreBanda',
            message: 'Inserte el nombre de la Banda'
        },
        {
            type: 'number',
            name: 'anioConformacion',
            message: 'Inserte el anio de conformacion de la Banda'
        },
        {
            type: 'text',
            name: 'vocalista',
            message: 'Inserte el nombre del vocalista de la Banda'
        },
        {
            type: 'text',
            name: 'primerAlbum',
            message: 'Inserte el nombre del primer Album de la Banda'
        },
        {
            type: 'number',
            name: 'numeroIntegrantes',
            message: 'Inserte el numero de integrantes de la Banda'
        }
    ];
    const respuestaPreguntas = await prompts(preguntasBandas);
    const nuevoRegistroBanda = {
        Aid: id,
        nombreBanda: respuestaPreguntas.nombreBanda,
        anioConformacion: respuestaPreguntas.anioConformacion,
        vocalista: respuestaPreguntas.vocalista,
        primerAlbum: respuestaPreguntas.primerAlbum,
        numeroIntegrantes: respuestaPreguntas.numeroIntegrantes
    };
    id = id + 1;
    Bandas.push(nuevoRegistroBanda);
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
        console.log('ADIOS, ERES TU -> NO YO');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('.:Registro de Bandas:.', Bandas);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const AidAEditar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid del Vengador cuya informacion desea editar'
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
    if(respuestaCampo == 'nombreBanda'){
        const nuevonombreBanda = await prompts({
            type: 'text',
            name: 'newBanda',
            message: 'Ingrese el nuevo nombre de la Banda'
        });
        Bandas[AidEncontrado].nombreBanda = nuevonombreBanda.newBanda;
    } else if (respuestaCampo == 'anioConformacion') {
        const nuevoAnioConformacion = await prompts({
            type: 'number',
            name: 'newAnioConformacion',
            message: 'Ingrese el nuevo año de conformacion de la banda'
        });
        Bandas[AidEncontrado].anioConformacion = nuevoAnioConformacion.newAnioConformacion;
    } else if (respuestaCampo == 'vocalista'){
        const nuevoVocalista = await prompts({
            type: 'text',
            name: 'newVocalista',
            message: 'Ingrese el NUEVO vocalista de la banda'
        });
        Bandas[AidEncontrado].vocalista = nuevoVocalista.newVocalista
    } else if (respuestaCampo == 'primerAlbum'){
        const nuevoAlbum = await prompts({
            type: 'text',
            name: 'newAlbum',
            message: 'Ingrese el nuevo primer album de la Banda '
        });
        Bandas[AidEncontrado].primerAlbum = nuevoAlbum.newAlbum;
    } else if (respuestaCampo == 'numeroIntegrantes'){
        const nuevonumeroIntegrantes = await prompts({
            type: 'number',
            name: 'newnumeroIntegrantes',
            message: 'Ingrese el nuevo numero de integrantes de la Banda '
        });
        Bandas[AidEncontrado].numeroIntegrantes = nuevonumeroIntegrantes.newnumeroIntegrantes;
    } else {
        console.log("INGRESE UN CAMPO VALIDO");
    }
    console.log('El registro de Bandas actualizado es: ', Bandas);
    queDeseaHacer().then().catch();
    return Bandas
};
async function eliminarRegistro(){
    const AidEliminar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid de la Banda cuya informacion desea eliminar '
    });
    const AidEncontrado = Bandas.findIndex(
        function(valorActual){
            return valorActual.Aid == AidEliminar
        }
    );
    Bandas.splice(AidEliminar, 1);
    console.log('El nuevo registro de Bandas es: ', Bandas);
    queDeseaHacer().then().catch();
    return Bandas;
}

function main(){
    crearDatosBandas().then().catch();
}