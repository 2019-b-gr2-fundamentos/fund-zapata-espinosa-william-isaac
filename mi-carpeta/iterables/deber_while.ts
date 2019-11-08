/* 
1 Analisis
2 Algebra
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

let Analisis = 0;
let Algebra = 0;
let Compiladores = 0;
let Fundamentos = 0;
let Calculo = 0;
let Fisica = 0;
let Ingles = 0;
let deberes = 0;
do {
    deberes = deberes + 1;
if (deberes % 13 == 0){
    Ingles = Ingles +1;
} else if (deberes % 11 == 0){
    Fisica = Fisica +1;
} else if (deberes % 7 == 0){
    Calculo = Calculo + 1;
} else if(deberes % 5 == 0){
    Fundamentos = Fundamentos + 1;
} else if (deberes % 3 == 0){
    Compiladores = Compiladores + 1;
} else if (deberes % 2 == 0){
    Algebra = Algebra + 1;
} else if (deberes % 2 != 0){
    Analisis = Analisis + 1;
}

}
while (deberes < 1000 );
console.log(`Hice ${Analisis} debereres de Analisis`);
console.log(`Hice ${Algebra} debereres de Algebra`);
console.log(`Hice ${Compiladores} debereres de Compiladores`);
console.log(`Hice ${Calculo} debereres de Calculo`);
console.log(`Hice ${Fundamentos} debereres de Fundamento`);
console.log(`Hice ${Fisica} debereres de Fisica`);
console.log(`Hice ${Ingles} debereres de Ingles`);