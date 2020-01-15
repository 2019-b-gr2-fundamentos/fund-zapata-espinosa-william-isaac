// 02 crud.ts create read update delete
// const prompts = require('prompts');
var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    /*
    Paradigma de programacion
    SINCRONO VS ASINCRONA
   */
    console.log('Inicio ');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    })
        .then(function (datos) {
        console.log('datos', datos); // AQUI PUEDO SEGUIR
        //
        // Codigo
        //
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        promesaNombre
            .then(function (datos) {
            console.log('Nombre', datos);
        })
            .catch(function (error) {
            console.log('Error', error);
        });
    });
    console.log(promesaEdad);
    console.log('Fin');
}
main();
