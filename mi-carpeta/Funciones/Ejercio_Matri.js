/*
Escriba un programa que verifique si dos matrices son iguales (La matriz de dos dimensiones n*m)
"n" y "m" son = o no
arreglo [m][n]
m -> Filas
n -> Columnas
*/
function comprobarMatriz(arreglo1, arreglo2) {
    return true;
}
function Filas() {
    var m1 = arregloUno.length;
    var m2 = arregloDos.length;
    var m3 = arregloTres.length;
}
function Columnas() {
    var na1 = arregloUno[0].length;
    var na2 = arregloDos[0].length;
    var na3 = arregloTres[1].length;
    var nb1 = arregloUno[1].length;
    var nb2 = arregloDos[1].length;
    var nb3 = arregloTres[1].length;
}
var arregloUno = [
    [1, 2, 3],
    [4, 5, 6]
];
var arregloDos = [
    [1, 2, 3],
    [4, 5, 6]
];
var arregloTres = [
    [7, 8, 3],
    [4, 9, 6]
];
function main() {
    Columnas();
    var na1 = arregloUno[0].length;
    console.log("Es", na1);
}
