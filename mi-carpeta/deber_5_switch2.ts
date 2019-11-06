// Baul de los recuerdos (de la musica)
console.log("Bienvedidos, conoce mas datos interesantes de los generos de musica");
console.log("1. Rock");
console.log("2. Pop");
console.log("3. Reggaeton");
console.log("4. Rap");
const menuString = prompt("Indique a que seccion desea ir: ");
const menu = Number(menuString);
switch(menu){
    case (1):
        console.log("Las 3 mejores bandas del Rock de todos los tiempos son: Queen, Rolling Stones y Pink Floyd");
        console.log("Las 3 canciones mas escuchadas de Rock es: Stairway to Heaven, Back in Black, Bohemian Rhapsody");
        break;
    case (2):
        console.log("Las 3 mejores bandas mas famosas de Pop son: Ov7, RBD, Katy Perry y Michael Jakson");
        console.log("Un dato curioso es que Katy Perry tiene el mismo record de sencillos que Michael Jakson");
        break;
    case (3):
        console.log("Los cantantes mas destacados del Reggaeton son: Daddy Yanke, Don Omar, Tego Calderon y Tito el Bambino");
        console.log("Las canciones más escuchadas en este año: Felices los 4, Vacaciones, Krippy Crush y 11 pm");
        break;
    case (4):
        console.log("Los mejores raperos del mundo: Eminem, Porta, Canserbero y Nach");
        console.log("Las canciones más sonadas son Stan, Juicy, bella y bestia y It was a Good day");
        break;
    default:
            console.log("ERROR, revise el numero ingresado");
}