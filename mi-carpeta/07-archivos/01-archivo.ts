import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts'
async function main(){
const contenidoArchivo = leerArchivo('./ejemplo.txt');
console.log('contenidoArchivo', contenidoArchivo);

// PARSEAR -> TEXTO -> Estructura en memoria
/*

{
   "nombre": "Adrian"
}

*/
let arregloCargadoDeArchivo; // undefined

try{
   arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
} catch (error){
   arregloCargadoDeArchivo = [];
   console.log('ERROR PARSEADO archvo');
}
let contador = -1;
// OPERADORES
let minimoId = -1
arregloCargadoDeArchivo.forEach( // no envia nada y no se les devuelve nada -> Iterar 
   function(valorActual){
   const idActual = valorActual.id;
   if(idActual > minimoId){
      minimoId = idActual
   }
}
); 
minimoId = minimoId + 1;
contador = minimoId
/*
try {
   console.log('1');
   console.log('2');
   console.log('3');
   console.log('4');
   var a = b;
   // SYNTAX ERROR
   throw new Error("EL ARCHIVO ESTA MAL PARSEADO ¡¡¡¡")
   console.log('4');
   console.log('5');
} catch(error){
   console.log(error);
   console.log(':3')
}
*/
const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
const arregloPreguntas = [
   {
      type: 'text',
      name: 'nombre',
      message: 'Ingrese tu nombre?'
   }
];
const respuestaEstudiantes = await prompts(arregloPreguntas);
const nuevoRegistro = {
   id: contador,
   nombre: respuestaEstudiantes.nombre
};
contador = contador + 1;
arregloEstudiantes.push(nuevoRegistro)

const respuestaEstudiantesDos = await prompts(arregloPreguntas);

const nuevoRegistroDos = {
   id: contador,
   nombre: respuestaEstudiantesDos.nombre
};
contador = contador + 1;
arregloEstudiantes.push(nuevoRegistroDos)

console.log('Cual usuario quieres Editar');
console.log(arregloEstudiantes);
// Operadores -> Reemplaza al  FOr  
const idABuscar = await prompts({
   type:'number',
   name: 'id',
   message: 'Ingrese el ID del Registro a Editar'
});

const indiceEncontrado = arregloEstudiantes.findIndex( //  return Condicion ->  
   function (valorActual, indice, arreglo){
      // console.log(valorActual);
      // console.log(indice);
      // console.log(arreglo);
      return valorActual.id ==  idABuscar.id; // Nos devuelve el INDICE
   } // Si encuentra nos devuelve el indice
      // No encuntra
)
/*
const textoLeido = leerArchivo('./ejemplo.txt');
const nuevoContenido = 'TENGO HAMBRE :( \n' ;
escribirArchivo('./ejemplo.txt','');
console.log(textoLeido + nuevoContenido);
*/
console.log('Indice encontrado: ',indiceEncontrado);

const nombreAEdiatar = await prompts({
   type:'text',
   name: 'nombre',
   message: 'Ingrese el nuevo Nombre'
});

arregloEstudiantes[indiceEncontrado].nombre = nombreAEdiatar.nombre;
console.log(arregloEstudiantes);
const buscar = await prompts({
   type:'text',
   name: 'nombre',
   message: 'Buscar por ID o por nombre '
});

const estudianteEncontrado = arregloEstudiantes.find(// retutn Condicion 
   function(valorActual){
      return valorActual.nombre == buscar.nombre;

   }
);

console.log(estudianteEncontrado)
const arregloTexto = JSON.stringify(arregloEstudiantes);
//  JSON.stringify -> Convierte objeto o arreglo en memoria
//                  -> a texto
console.log(arregloTexto)
escribirArchivo('./ejemplo.txt',arregloTexto);
}
main().then().catch();
