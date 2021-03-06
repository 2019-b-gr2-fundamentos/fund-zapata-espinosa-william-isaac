"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
var prompts = require("prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, arregloCargadoDeArchivo, contador, minimoId, arregloEstudiantes, arregloPreguntas, respuestaEstudiantes, nuevoRegistro, respuestaEstudiantesDos, nuevoRegistroDos, idABuscar, indiceEncontrado, nombreAEdiatar, buscar, estudianteEncontrado, arregloTexto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contenidoArchivo = _02_leer_archivo_1.leerArchivo('./ejemplo.txt');
                    console.log('contenidoArchivo', contenidoArchivo);
                    try {
                        arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
                    }
                    catch (error) {
                        arregloCargadoDeArchivo = [];
                        console.log('ERROR PARSEADO archvo');
                    }
                    contador = -1;
                    minimoId = -1;
                    arregloCargadoDeArchivo.forEach(// no envia nada y no se les devuelve nada -> Iterar 
                    function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoId) {
                            minimoId = idActual;
                        }
                    });
                    minimoId = minimoId + 1;
                    contador = minimoId;
                    arregloEstudiantes = arregloCargadoDeArchivo;
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingrese tu nombre?'
                        }
                    ];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 1:
                    respuestaEstudiantes = _a.sent();
                    nuevoRegistro = {
                        id: contador,
                        nombre: respuestaEstudiantes.nombre
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(nuevoRegistro);
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 2:
                    respuestaEstudiantesDos = _a.sent();
                    nuevoRegistroDos = {
                        id: contador,
                        nombre: respuestaEstudiantesDos.nombre
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(nuevoRegistroDos);
                    console.log('Cual usuario quieres Editar');
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el ID del Registro a Editar'
                        })];
                case 3:
                    idABuscar = _a.sent();
                    indiceEncontrado = arregloEstudiantes.findIndex(//  return Condicion ->  
                    function (valorActual, indice, arreglo) {
                        // console.log(valorActual);
                        // console.log(indice);
                        // console.log(arreglo);
                        return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuntra
                    );
                    /*
                    const textoLeido = leerArchivo('./ejemplo.txt');
                    const nuevoContenido = 'TENGO HAMBRE :( \n' ;
                    escribirArchivo('./ejemplo.txt','');
                    console.log(textoLeido + nuevoContenido);
                    */
                    console.log('Indice encontrado: ', indiceEncontrado);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingrese el nuevo Nombre'
                        })];
                case 4:
                    nombreAEdiatar = _a.sent();
                    arregloEstudiantes[indiceEncontrado].nombre = nombreAEdiatar.nombre;
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Buscar por ID o por nombre '
                        })];
                case 5:
                    buscar = _a.sent();
                    estudianteEncontrado = arregloEstudiantes.find(// retutn Condicion 
                    function (valorActual) {
                        return valorActual.nombre == buscar.nombre;
                    });
                    console.log(estudianteEncontrado);
                    arregloTexto = JSON.stringify(arregloEstudiantes);
                    //  JSON.stringify -> Convierte objeto o arreglo en memoria
                    //                  -> a texto
                    console.log(arregloTexto);
                    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', arregloTexto);
                    return [2 /*return*/];
            }
        });
    });
}
main().then().catch();
