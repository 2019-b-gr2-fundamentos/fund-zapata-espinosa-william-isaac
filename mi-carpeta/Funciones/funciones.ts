function sumar(numUno:number, numDos: number): number{
    return numUno + numDos;
}

function restar(numUno:number, numDos: number): number{
    return numUno - numDos;
}

function multiplicar(numUno:number, numDos: number): number{
    return numUno * numDos;
}
function dividir(numUno:number, numDos: number): number{
    return numUno / numDos;
}

function main(){
calculadora();
}


function calculadora(){
    const operacion:string = prompt('Selecciona una operacion: "1. Suma", "2. Resta", "3. Multiplicacion", "4. Division","5. Chao"');
    const esSuma:boolean =operacion =='suma' || operacion == '1' || operacion == '1. Suma';
    const esResta:boolean =operacion =='resta' || operacion == '2' || operacion == '2. Resta';
    const esMultiplicacion:boolean =operacion =='multiplicacion' || operacion == '3' || operacion == '3. Multiplicacion';
    const esDivision:boolean =operacion =='division' || operacion == '4' || operacion == '4. Division';
    const esChao:boolean = operacion == 'chao' || operacion == '5' || operacion == '5. Chao'
    const estaValida: boolean = esSuma || esMultiplicacion || esResta || esDivision;

    if(estaValida){
        const numUno = +prompt("Number 1");
        const numDos = +prompt("Numero 2");
        let resultado = 0;
        if(esSuma){
           resultado = sumar(numUno,numDos);
        }
        if(esResta){
           resultado = restar(numUno,numDos);
        }
        if(esMultiplicacion){
           resultado = multiplicar(numUno,numDos);
        }
        if(esDivision){
           resultado = dividir(numUno,numDos);
        }
        console.log(resultado);
        calculadora();
    } else{
        if(esChao){
            console.log("Eres tu no soy yo :.(");
        } else{
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