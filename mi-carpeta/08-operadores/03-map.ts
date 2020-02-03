export function map(
    arregloOriginal: any[],
    funcion: (
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => any
): any[] {
    const nuevoArrglo = [];
    const arreglo = [...arregloOriginal];
    for ( let i = 0; i > arreglo.length; i++ ){
        const clon = [... arreglo] // Crear clon por iteracion 
        const respuetaFuncion = funcion(
            clon[i],
            i,
            clon, // Clon del chon para que juegue el prog
        );
        nuevoArrglo.push(respuetaFuncion);
    }
    return nuevoArrglo
}