export function some(
    arreglo: any[],
    funcion: (
        valorActual: any,
        indice: number,
        arreglo: any) => boolean
): any {
    let condicion = true;
    for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i], 
            i,
            arreglo, 
        ); 
        if(respuestaFuncion == true){
           condicion;
        }else{
            condicion = false;
        }
        return condicion;
    };
}