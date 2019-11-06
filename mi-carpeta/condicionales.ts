// TRUTY

const nombreVacio = " ";
if(" "){
console.log("Truty");
}else{
console.log("Falsy")
}


if("abc"){
console.log("Truty");
}else{
console.log("Falsy")
}

if(-1){
    console.log("Truty");
    }else{
    console.log("Falsy")
    }

    if(0){
        console.log("Truty");
        }else{
        console.log("Falsy")
        }

        if(0){// Falsy los demas son Truty
            console.log("Truty");
            }else{
            console.log("Falsy")
            }
            if(1.39){
                console.log("Truty");
                }else{
                console.log("Falsy")
                }
                if(null){
                    console.log("Truty");
                    }else{
                    console.log("Falsy")
                    }

    if(undefined){
                console.log("Truty");
                }else{
                console.log("Falsy")
                }


const calculo = "sumar";
switch(calculo){
    case "sumar":
        // code block
        break;
    case "resta":
        // code block
        break;
    case "multiplicacion":
         // code block
         break;
    case "division":
        // code block
        break;
    default:

}

// 6 Guagua
// 18 Guambra|
// 65 Longo
// 66 Ruku


//const edadString = prompt("Ingrese su edad ")
//const edad = Number(edadString);
//switch(edad){
//case (edad >0 %% edad <= 6):
   // console.log("Guagua");
    //break;
//case ():
  //  Console.log("Guambra");

//}

const edadString = prompt("Ingrese su edad ")
const edad = Number(edadString);
if(edad >0 && edad<=6){
console.log("Guagua");
}else if(edad >6 && edad<=18){
console.log("Guambra");
}else if(edad>18 && edad<=65 ){
console.log("Longo");
}else if (edad>65){
console.log("Ruko");    
}

