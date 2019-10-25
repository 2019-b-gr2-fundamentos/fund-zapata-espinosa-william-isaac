// STRINGS 

const mensaje = "\"Holasss\"";
const saludo = '\'Adios\'';
console.log(mensaje + "1\t\t\t 222\r\r\r 3\n" + saludo);

// template strings
const edad = 30;
const saludoEdad = `Mi edad es: \n${edad}`;
const saludoCompleto = `${mensaje}\n${saludo} `;
console.log(saludoCompleto)


// contamos los elementos

const nombreLongitud = "William"; 
console.log(nombreLongitud.length);

// Eliminar espacios al principio  y al final

console.log(nombreLongitud.trim());

// Cambiar a mayusculas o minusculas

console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("e","o"));
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud.replace("\n",""));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("x","o"));

// Seacrh

// Busca la primera ocurencia y
// muestra la posicion. Si no hay sale -1 

console.log(nombreLongitud.search("z"));
console.log(nombreLongitud.search("j"));

// Slice pedazo (posiciones)

console.log(nombreLongitud.slice(0,6));

// indexOf
/*
no existe -1 
si existe la posicion 
*/
console.log(nombreLongitud.indexOf("a"));

// includes -- devuelve un boolean

/*
no existes    false
existe   true
*/
console.log(nombreLongitud.includes("x"));

// endsWitch and startsWich ----- devuelve boolean

/*
no existes    false
existe   true
*/

console.log(nombreLongitud.endsWith("x"));
console.log(nombreLongitud.startsWith("x"));

// substring

/*

substring y el slice solo coje la cantidad deseada (0,10)
william --- william

*/

console.log(nombreLongitud.substring(0,6));