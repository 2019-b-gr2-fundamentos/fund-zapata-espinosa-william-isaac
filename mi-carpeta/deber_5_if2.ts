// Mayor entre dos numeros
console.log("\nMayor entre dos numeros\n");
const nu1String = prompt("Ingrese su primera numero: ");
const nu1 = Number(nu1String);
console.log("\nSaber si tienes que ir a vielar al final del semestre\n");
const nu2String = prompt("Ingrese su segundo numero: ");
const nu2 = Number(nu2String);
if(nu1>nu2){
    console.log("El numero mayor es el primero: ");
}
else if(nu2>nu1){
    console.log("El mumero mayor es el segundo: "+nu2);
}