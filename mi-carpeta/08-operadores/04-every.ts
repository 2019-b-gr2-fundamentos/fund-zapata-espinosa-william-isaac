export function every(
    arreglo: any[],
    funcion: (
        valorInicial: any,
        indice?: number,
        arreglo?: any[]) => boolean
): boolean {
    let condicion = true
    for( let i=0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo
        );
        if (respuestaFuncion != true){
            condicion = false;
            return condicion
        } else {
            return condicion
        }
    }
}