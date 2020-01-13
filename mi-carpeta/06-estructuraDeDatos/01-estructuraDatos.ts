import { AnimalPerrito } from './interfaces/animal-perrito.interface'
import { Duenio }from './interfaces/duenio.interface'

/*

boolean 
string 
null -> object
number 
ANIMAL -> nombre cientifico, color principal 
fecha de nacimiento, peso, genero, altura 

Casie en todos los lenguajes 
Struct -> Esctructura de datos
Clase -> Esctructuras de datos -> Metodos ! 

*/

const edad = 20;


const ejemploEstructura = {

    nombreCientifico: 'canis lupus familiaris',
    "llave":"valor",
    noEsNecesario: true, // pueden pober la ultima coma
    enojo: undefined,
    edadActual: edad // variables  
    
}

// Estructura de datos en lenguaje no Tipado 

const poliPerro = {

    nombreCientifico: 'Canis Lupus Familiaris',
    "llave":"valor",
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manueola','Zoraida'],
    vacuna: true,
    
}

console.log(poliPerro.nombre) // CANIS LUPUS FAMILIARIS


// Estructura de datos en lenguaje Tipado



const poliPerroAmarrillo:AnimalPerrito = {

    nombreCientifico: 'Canis Lupus Familiaris',
    // "llave":"valor",
    nombres: 'Aamrillo',
    clan: 'Poliperro',
    edad: 4,
    // hijos: null,
    // perritas: [],
     vacuna: false,

    
}

const duenioPoliPerroAmarrillo: Duenio = {
    nombres: 'William',
    apellidos: ' ',
    fechaNacimiento: 2
    mascotasPerros: [poliPerroAmarrillo]

}

poliPerroAmarrillo.duenio = duenioPoliPerroAmarrillo;
poliPerroAmarrillo.edad = 4;
poliPerroAmarrillo.vacunado = true;