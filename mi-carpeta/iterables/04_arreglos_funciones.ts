const arregloNumeros = [1,2,3,4,5,9,6,7,8,9,10];

// Acceder 
// Necesito: Indice 
console.log(arregloNumeros[6]); //7

// Anadir al final 
// Necesito: Elemento a anadirse
arregloNumeros.push(11);

// Borrar al final 
arregloNumeros.pop();

// Anadir o Borrar

//1.  Anadir en un indice
// Necesito: Indice y el elemento
arregloNumeros.splice(1,0,1.2);

// 2. Quitar
arregloNumeros.splice(6,1);
console.log(arregloNumeros);

// 3. Buscar el indice de un indice 
arregloNumeros.indexOf(5); // 5
arregloNumeros.indexOf(7); 
console.log(arregloNumeros.indexOf(7));
console.log(arregloNumeros.indexOf(9));


//
arregloNumeros[0] = 999;