function main(){

    const arregloEstudiantes: any = [
        {id:1, nombre:"William", nota: 7},
        {id:1, nombre:"Isaac", nota: 10},
        {id:1, nombre:"Adrian", nota: 6},
        {id:1, nombre:"Xavier", nota: 4},
        {id:1, nombre:"Eduardo", nota: 7},
        {id:1, nombre:"Carlos", nota: 8}
    ];
    // OPERADOR - FOREACH -> ITERAR
    // ENVIAMOS -> NADA
    // RECIBIMOS -> NADA
     const respuestaForEach = arregloEstudiantes.forEach(
        function(valorActual, indice, arreglo){
            console.log(valorActual.nota)
            valorActual.nota20 = valorActual.nota*2;
        }
    );
        console.log(respuestaForEach); // undefined

    // MAP -> TRANSFORMAR EL ARREGLO (MUTAR EL ARREGLO)
    // ENVIAMOS -> VALOR ACTUAL MODIFICADO 
    // RECIBIR -> NUEVO ARREGLO CON VALORES MODIFICADOS 

        const respuestaMap = arregloEstudiantes.map( // Devuelve el arreglo Modificadp !!!!
            function(valorActual, i, arreglo){
                const nuevoObjeto = {
                    id: valorActual.id,
                    nombre: valorActual.nombre,
                    nota: valorActual.nota,
                    nota20: valorActual.nota * 2
                };
                return nuevoObjeto;
            }
        );
        console.log('Respuesta Map', respuestaMap);
        console.log('arregloEstudiantes', arregloEstudiantes);

    // Filter -> filtra el arreglo
    // Enviamos -> condicion 
    // recibir -> nuevo arreglo con valores filtrados

    const respuestaFilter = arregloEstudiantes.filter(
        function(valorActual, i, arreglo){
            const condicion = valorActual.nota >= 7;
            const condicion2 = valorActual.nota < 4;
            // condicion es un TRUTY O UN TRUE
            return condicion || condicion2; 
        }
    );
        console.log('RespuestaFilter', respuestaFilter);
        console.log('arreglosEstudiantes', arregloEstudiantes);
    // AND -> EVERY (TODOS CUMPLAN) / OR -> SOME (UNO CUMPLA)

    // SOME -> DEVUELVE T O F DEPENDE DE LA CONDICION 
    //       SI ALGUNO CUMPLE DEVUELVE T
    //       SI NO  ALGUNO CUMPLE DEVUELVE F
    // ENVIAMOS -> CONDICION 
    // RECIBIR -> BOOLEAN

    const respuestaSome = arregloEstudiantes.some(
        function(valorActual, i, arr){
            const condicion = valorActual.nota < 7;
            // condicion TRUTY O FALSE 
            return condicion;

        }
    );
    console.log('respuestaSome', respuestaSome);
    console.log('arregloEstudiantes', arregloEstudiantes);

    // EVERY -> DEVUELVE T O F DEPENDE DE LA CONDICION 
    //       SI TODO CUMPLE DEVUELVE T
    //       SI NO  TODOS CUMPLE DEVUELVE F
    // ENVIAMOS -> CONDICION 
    // RECIBIR -> BOOLEAN

    const respuestaEVERY = arregloEstudiantes.every(
        function(valorActual){
            const condicion = valorActual.nota < 8;
            // condicion TRUTY O FALSE 
            return condicion;

        }
    );
    console.log('respuestaEvery', respuestaEVERY);
    console.log('arregloEstudiantes', arregloEstudiantes);

    // Reduce -> DEVUELVE un valor 
    // ENVIAMOS -> Calculo
    // RECIBIR -> Valor

    const respuestaReduce = arregloEstudiantes.reduce(// funcion 
        function(acumulador, valorActual){
            const calculo = acumulador + valorActual.nota;
            return calculo;
        },
        0  // valor inicial del acumulador  
    );
    console.log('respuestaReduce', respuestaReduce);
    console.log('Promedio', respuestaReduce/ arregloEstudiantes.length);
    console.log('arregloEstudiantes', arregloEstudiantes);







}
main();