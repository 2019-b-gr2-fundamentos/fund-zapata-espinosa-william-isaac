if(true){ // Bloque 1
    let edad = 30;
    console.log(edad); // 30
    if(edad){ // Bloque 2
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    }else{ // Bloque 5
        console.log(edad);
    }
}else{ // Bloque 6
    console.log(edad); // undefined
    console.log("7 años de carcel :.(");
}

for(let i=0;i<10; i++){
    let bandera = 0;
    bandera = bandera + i;
    console.log("Es: ",bandera);
}
// No es lo mismo
let bandera = 0;
for(let i=0;i<10; i++){
    bandera = bandera + i;
    console.log("Es: ",bandera);
}