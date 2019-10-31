// Saber si tienes que ir a vielar al final del semestre XD
console.log("\nSaber si tienes que ir a vielar al final del semestre\n");
const n1String = prompt("Ingrese su primera nota: ");
const n1 = Number(n1String);
if(n1>2 && n1<=5){
console.log("Mejor sigue ahorrando"); 
}
else if(n1>5 && n1<=8){
console.log("Sigue asi y pueda que vielas");
}
else if(n1>8 && n1<=10){
console.log("Anda este viernes a vielar : )");    
}
const n2String = prompt("Ingrese su primera nota: ");
const n2 = Number(n2String);
let res;
res = n1 + n2;
if(res>=8.5 && res<=8.9){
console.log("Anda pegate la arrodillada de tu vida para llegar al suple");
}
else if(res>8.9 && res<=13.4){
console.log("Chao viela :(");    
}
else if(res>=13.5 && res<=13.9){
console.log("Ruega al ing que te anga pasar e invitale la viela");    
}
else if(res>=14 && res<=20){
console.log("Anda viela como dios manda ");
}