function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operacion: "1. Suma", "2. Resta", "3. Multiplicacion", "4. Division","5. Chao"');
    var esSuma = operacion == 'suma' || operacion == '1' || operacion == '1. Suma';
    var esResta = operacion == 'resta' || operacion == '2' || operacion == '2. Resta';
    var esMultiplicacion = operacion == 'multiplicacion' || operacion == '3' || operacion == '3. Multiplicacion';
    var esDivision = operacion == 'division' || operacion == '4' || operacion == '4. Division';
    var esChao = operacion == 'chao' || operacion == '5' || operacion == '5. Chao';
    var estaValida = esSuma || esMultiplicacion || esResta || esDivision;
    if (estaValida) {
        var numUno = +prompt("Number 1");
        var numDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
        calculadora();
    }
    else {
        if (esChao) {
            console.log("Eres tu no soy yo :.(");
        }
        else {
            calculadora();
        }
    }
}
/*
1. Seleccionar la operacion
2.1. La seleccion es VALIDA
    2.1.1 Vuelve a seleccionar la operacion
2.2. La seleccion NO es VALIDA
    2.2.1 Ingrese primer numero
    2.2.2 Ingrese segundo numero
    2.2.3 Ejecutar la operacion


*/ 
