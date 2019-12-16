/*
Escriba un programa que verifique si dos matrices son 
iguales ( la matriz es de dos dimensiones m*n ) 
"m" y "n" pueden ser iguales o distintas
m -> filas
n -> columnas
*/
function matricesIguales(matriz1:number[][],matriz2:number[][]):void{
    let filaUno = +prompt("Ingrese el numero de filas de la primera Matriz: ")
    let columnaUno = +prompt("Ingrese el numero de columnas de la primera Matriz: ")
for(let i=0;i<filaUno;i++){
    for(let j=0;j<columnaUno;j++){
        matriz1[i][j] = +prompt("Matriz 1["+i+"]["+j+"]=")
    } 
}
    let filaDos =+ prompt("Ingrese el numero de filas de la segunda Matriz: ")
    let columnaDos = +prompt("Ingrese el numero de columnas de la segunda Matriz: ")
    for(let i=0; i<filaDos;i++){
        for(let j=0;j<columnaDos;j++){
            matriz2[i][j] = +prompt("Matriz 2["+i+"]["+j+"]=")
        }
    }

    if((filaUno==filaDos) && (columnaUno==columnaDos) && (filaUno == columnaDos)){
        let loSon= true
        for(let i=0;i<filaUno;i++){
            for(let j=0;j<columnaUno;j++){
                if(matriz1[i][j]== matriz2[i][j]){
                    console.log("Las matrices son =")
                } else{
                    console.log("Las matrices no son =")
                }
            }
        }

    }else {
        console.log("No tienen las mismas dimensiones :.(")
    }
    
}
function main(){
    let matriz1 [][]
    let matriz2 [][]
    matricesIguales(matriz1,matriz2)
}