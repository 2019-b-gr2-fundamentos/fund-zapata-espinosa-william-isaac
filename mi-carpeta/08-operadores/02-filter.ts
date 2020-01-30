export  function calcular(funcion,numeroUno, numeroDos){
    const valorInicial = 10;
    return funcion (numeroUno, numeroDos, valorInicial);
};
export function sumar(numeroUno, numeroDos, valorInicial){
    return numeroUno + numeroDos;
}
export function restar(numeroUno, numeroDos, valorInicial){
    return numeroUno - numeroDos;
}

calcular(sumar,1,2); //3
calcular(
    function (numeroUno, numeroDos, valorInicial){
        return numeroUno - numeroDos;
    },5,3
); //2




export function filter(
    arreglo: any[],
    funcion: (
        valorInicial: any, 
        indice?: number, 
        arreglo?: any[]) => boolean
): any[]{
    const arregloFiltrado = [];
    for(let i = 0;i < arreglo.length;i++){
        const respuestaFuncion = funcion(
            arreglo[i], // -> valor actual
            i, // -> indice 
            arreglo // - > Arreglo
        );
        if(respuestaFuncion == true){
            arregloFiltrado.push(arreglo[i]); 
        }
    }
    return arregloFiltrado;
}