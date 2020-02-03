// Referencias
function main(){
    let uno = 1;
    let dos = uno;
    let tres = dos;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres', tres);

    let arreglo = [1,2,3];
    let miOtroArreglo = [];
    let a = arreglo[0];
    let b = arreglo[1];
    console.log('Arreglo', arreglo);
    console.log("a", a);
    console.log('b', b);
    miOtroArreglo = [...arreglo, ...arreglo]
     // Ref -> Direccion de memoria 
    // Asignar a mi otro arrglo una nueva direccion de memoria 
    /*
    1-> For llenar un nuevo arreglo
    2-> Fliter  -> Siempre true -> Nuevo arreglo 
    2 -> Map -> Nuevo arreglo
    
    Inmutabilidad 
    Js -> Arrglos o Objetos -> Clon !!
    Clon de arreglo -> clon trabajar  



    */
    miOtroArreglo.push(2);
    arreglo[0] = 9;
    arreglo[1] = 10;
    console.log('Arreglo', arreglo);
    console.log('miotroA', miOtroArreglo);
    console.log("a", a);
    console.log('b', b);

    const adrian = {
        id: 1,
        nombre: 'William',
        sueldo: 1.23
    } ;
    const soloElNombre = {
        ...arreglo
    }
    const copUno = {
        ...soloElNombre
    }
    const  copDos = {
        ... adrian
    }
    console.log('adrian',adrian);
     delete adrian.nombre; // eLIMINAR EL NOMBRE DEL OBJETO
     soloElNombre['edad'] = 22;
     // soloElNombre.edad = 22;
     console.log('adrian',adrian);
     console.log('soloElNombre', soloElNombre)

}
main();