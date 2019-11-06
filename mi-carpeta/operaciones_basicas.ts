// Calculadora
console.log("Bienvenidos que operacion desea realizar");
console.log("1. Suma") 
console.log("2. Resta") 
console.log("3. Multiplicacion") 
console.log("4. Division") 
console.log("5. Transformar de Kg a g")
console.log("6. Salir") 
const opString = prompt("Indique la operacion desea: ");
const op = Number(opString);
let resultado
switch(op){
    case (1):
        const numeroString = prompt("Ingrese el primer numero: ");
        const numero = Number(numeroString);
        const numero2String = prompt("Ingrese el segunda numero: ");
        const numero2 = Number(numero2String);
        resultado = numero + numero2;
        console.log("El resultado es: ")
        console.log(resultado)
        break;
    case (2):
            const numero3String = prompt("Ingrese el primer numero: ");
            const numero3 = Number(numero3String);
            const numero4String = prompt("Ingrese el segunda numero: ");
            const numero4 = Number(numero4String);
            resultado = numero3 - numero4;
        console.log("El resultado es: ")
        console.log(resultado)
            
        break;
    case (3):
            const numero5String = prompt("Ingrese el primer numero: ");
            const numero5 = Number(numero5String);
            const numero6String = prompt("Ingrese el segunda numero: ");
            const numero6 = Number(numero6String);
            resultado = numero5 * numero6;
        console.log("El resultado es: ")
        console.log(resultado)
        break;
    case (4):
            const numero7String = prompt("Ingrese el primer numero: ");
            const numero7 = Number(numero7String);
            const numero8String = prompt("Ingrese el segunda numero: ");
            const numero8 = Number(numero8String);
            resultado = numero7 / numero8;
        console.log("El resultado es: ")
        console.log(resultado)
        break;
    case (5):
            const numero9String = prompt("Ingrese la cantidad en g: ");
            const numero9 = Number(numero9String);
            resultado = numero9 * 1000;
        console.log("El resultado en g es: ")
        console.log(resultado)
        break;
    case (6):
        console.log("Adios")
        break;
    default:
        console.log("Revise la opcion ingresada!!")
}