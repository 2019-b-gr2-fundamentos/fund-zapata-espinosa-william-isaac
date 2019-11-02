// Saber si ya estas hecho papel higenico (estas ebrio)
console.log("Saber si ya estas hecho papel higenico")
const nuvielasString = prompt("Ingrese el numero de cervezas que hay bebido: ");
const nuvielas = Number(nuvielasString);
if(nuvielas>=1 && nuvielas<=3){
    console.log("Toadavia jalas ");
} else if(nuvielas>3 && nuvielas<=5){
    const respuesta3String = prompt(" (Si 1/ No 0)|| Quiere llamar a su ex?¿ : ");
    const respuesta3 = Number(respuesta3String);
    if(respuesta3 != 1 && respuesta3 != 0){
        console.log("Revise su respuesta!!")
    } else if(respuesta3 ==1){
        console.log("Que pendel@ anda a ver mejor master chef ")
    } else {
        console.log("Muy bien")
    }
    const respuesta2String = prompt("(Si 1/ No 0)|| Puede hablar : ");
    const respuesta2 = Number(respuesta2String);
    if(respuesta2 != 1 && respuesta2 != 0){
        console.log("Revise su respuesta!!")
    } else if(respuesta2 ==1){
        console.log("Una cerveza más ")
    } else {
        console.log("Dile a alguien que te de pidiendo un taxi/uber y andate a dormir")
    }
    const respuestaString = prompt("(Si 1/ No 0)|| Puede caminar : ");
    const respuesta = Number(respuestaString);
    if(respuesta != 1 && respuesta != 0){
        console.log("Revise su respuesta!!")
    } else if(respuesta ==1){
        console.log("Una cerveza más ")
    } else {
        console.log("Dile a alguien que te de pidiendo un taxi/uber y andate a dormir");
    }
  
} else if(nuvielas >5){
    console.log("Mejor pide taxi/uber y andate a dormir ")
}