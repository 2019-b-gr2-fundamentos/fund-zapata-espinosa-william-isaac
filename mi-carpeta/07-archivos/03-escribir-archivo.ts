import * as fs from 'fs';

export function escribirArchivo(path: string, contenido: string){
    fs.writeFileSync(
        './ejemplo.txt', // PATH
        ' NUEVO CONTENIDO XD ' + contenido, // CONTENIDO
        'utf8' // CODIFICACION
    )

}