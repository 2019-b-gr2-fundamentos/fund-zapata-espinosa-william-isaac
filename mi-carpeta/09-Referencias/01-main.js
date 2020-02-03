var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Referencias
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglo = [1, 2, 3];
    var miOtroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log('Arreglo', arreglo);
    console.log("a", a);
    console.log('b', b);
    miOtroArreglo = __spreadArrays(arreglo, arreglo);
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
    var adrian = {
        id: 1,
        nombre: 'William',
        sueldo: 1.23
    };
    var soloElNombre = __assign({}, arreglo);
    var copUno = __assign({}, soloElNombre);
    var copDos = __assign({}, adrian);
    console.log('adrian', adrian);
    delete adrian.nombre; // eLIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22;
    // soloElNombre.edad = 22;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
}
main();
