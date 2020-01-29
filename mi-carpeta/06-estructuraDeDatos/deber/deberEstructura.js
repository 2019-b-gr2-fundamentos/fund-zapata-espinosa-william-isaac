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
var prompts = require("./node_modules/prompts");
var id = 1;
var Bandas = [];
function crearDatosBandas() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntasBandas, respuestaPreguntas, nuevoRegistroBanda;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntasBandas = [
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
                    return [4 /*yield*/, prompts(preguntasBandas)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroBanda = {
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
                    return [2 /*return*/];
            }
        });
    });
}
;
function queDeseaHacer() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Que desea hacer? \n 1-crear otro registro \n 2-leer los registros actuales \n 3-actualizar datos \n 4-eliminar registros \n 5-SALIR \n'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosBandas().then().catch();
                    }
                    else if (respuesta1 == 2) {
                        leerRegistros().then().catch();
                    }
                    else if (respuesta1 == 3) {
                        editarRegistro().then().catch();
                    }
                    else if (respuesta1 == 4) {
                        eliminarRegistro().then().catch();
                    }
                    else if (respuesta1 == 5) {
                        console.log('ADIOS, ERES TU -> NO YO');
                    }
                    else {
                        console.log('Elija una opcion valida, por favor!!!');
                        queDeseaHacer().then().catch();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('.:Registro de Bandas:.', Bandas);
            queDeseaHacer().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function editarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEditar, AidEncontrado, queDeseaEditar, respuestaCampo, nuevonombreBanda, nuevoAnioConformacion, nuevoVocalista, nuevoAlbum, nuevonumeroIntegrantes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid del Vengador cuya informacion desea editar'
                    })];
                case 1:
                    AidAEditar = _a.sent();
                    AidEncontrado = Bandas.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEditar.Aid;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'campoAEditar',
                            message: '¿Que campo desea editar?'
                        })];
                case 2:
                    queDeseaEditar = _a.sent();
                    respuestaCampo = queDeseaEditar.campoAEditar;
                    if (!(respuestaCampo == 'nombreBanda')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newBanda',
                            message: 'Ingrese el nuevo nombre de la Banda'
                        })];
                case 3:
                    nuevonombreBanda = _a.sent();
                    Bandas[AidEncontrado].nombreBanda = nuevonombreBanda.newBanda;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaCampo == 'anioConformacion')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'newAnioConformacion',
                            message: 'Ingrese el nuevo año de conformacion de la banda'
                        })];
                case 5:
                    nuevoAnioConformacion = _a.sent();
                    Bandas[AidEncontrado].anioConformacion = nuevoAnioConformacion.newAnioConformacion;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaCampo == 'vocalista')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newVocalista',
                            message: 'Ingrese el NUEVO vocalista de la banda'
                        })];
                case 7:
                    nuevoVocalista = _a.sent();
                    Bandas[AidEncontrado].vocalista = nuevoVocalista.newVocalista;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaCampo == 'primerAlbum')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newAlbum',
                            message: 'Ingrese el nuevo primer album de la Banda '
                        })];
                case 9:
                    nuevoAlbum = _a.sent();
                    Bandas[AidEncontrado].primerAlbum = nuevoAlbum.newAlbum;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaCampo == 'numeroIntegrantes')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'newnumeroIntegrantes',
                            message: 'Ingrese el nuevo numero de integrantes de la Banda '
                        })];
                case 11:
                    nuevonumeroIntegrantes = _a.sent();
                    Bandas[AidEncontrado].numeroIntegrantes = nuevonumeroIntegrantes.newnumeroIntegrantes;
                    return [3 /*break*/, 13];
                case 12:
                    console.log("INGRESE UN CAMPO VALIDO");
                    _a.label = 13;
                case 13:
                    console.log('El registro de Bandas actualizado es: ', Bandas);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, Bandas];
            }
        });
    });
}
;
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidEliminar, AidEncontrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid de la Banda cuya informacion desea eliminar '
                    })];
                case 1:
                    AidEliminar = _a.sent();
                    AidEncontrado = Bandas.findIndex(function (valorActual) {
                        return valorActual.Aid == AidEliminar;
                    });
                    Bandas.splice(AidEliminar, 1);
                    console.log('El nuevo registro de Bandas es: ', Bandas);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, Bandas];
            }
        });
    });
}
function main() {
    console.log(".: BIENVENIDOS :.");
    crearDatosBandas().then().catch();
}
main();
