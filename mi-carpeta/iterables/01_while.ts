// do while
let vecesQueHeComido = 0;
console.log("Vamos a comer")
do { 
    console.log("Vamos a comer")
    vecesQueHeComido = vecesQueHeComido +1;
    switch(vecesQueHeComido){
        case 1:
            console.log("Desayuno")
            break;
        case 2:
            console.log("Almuerzo")
             break;
        case 3:
            console.log("Merienda")
            break;
      default:
            console.log("Gorditos")
            break;
    }
} while(vecesQueHeComido < 3)

// while

let vecesQueHeComido2 = 0;
while(vecesQueHeComido2 < 3){
    console.log("Vamos a comer")
    vecesQueHeComido2 = vecesQueHeComido2 +1;
    switch(vecesQueHeComido2){
        case 1:
            console.log("Desayuno")
            break;
        case 2:
            console.log("Almuerzo")
             break;
        case 3:
            console.log("Merienda")
            break;
      default:
            console.log("Gorditos")
            break;
    }
}
/* 
1 Analisis
2  Algebra
3 Compiladores
5 Fundamentos 
7 Calculo
11 Fisic
13 Ingles

Si es impar le aumentamos a Analisis // 17
Si es par le aumentamos a Algebra // 17
Si es multiplo de 3 aumento a Compiladores //16

Cuantos deberes hicieron del 1 a 1000
*/

let Analisis = 0
let Algebra = 0
let Compiladores = 0
let deberes = 0

 do {
deberes = deberes + 1
if (deberes % 3 ==0){
    Compiladores = Compiladores + 1  
} 
else if (deberes % 2 ==0) {
    Algebra = Algebra + 1
} 
else if (deberes % 2 != 0){
    Analisis = Analisis +1
    console.log(`Hice ${Compiladores} deberes de Compiladores.`);
    console.log(`Hice ${Analisis} deberes de Analisis.`);
    console.log(`Hice ${Algebra} deberes de Compiladores.`);
} 

}
while (deberes < 50 );
2 Fundamentos
3 Calculo
5 Fisic
11 Ingles



