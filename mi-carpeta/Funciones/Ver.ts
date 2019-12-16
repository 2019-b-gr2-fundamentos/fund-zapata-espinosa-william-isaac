function MatricesIguales(matriz1 :number[][],matriz2:number[][]):void
{
const igualN = matriz1.length == matriz2.length;
const igualM = matriz1[1].length == matriz2[1].length;
const puedeSer = igualM && igualN;
var loSon = true;
if(puedeSer)
{
    for(var i = 0; i < matriz2.length; i ++)
    {
        for(var j = 0; j < matriz2[1].length; j ++)
        {
            if(loSon)
            {
                loSon = matriz2[i][j] == matriz1[i][j];
            }
        }
    }
if(loSon)
    {
        console.log("Las matrices son iguales");
    }else{
        console.log("Las matrices no son iguales")
    }
}else{
    console.log("Las matrices ingresadas no son de igual dimension, por lo que no pueden ser iguales");
}
}
function main()
{
    const matriz1 = [[1, 2, 3],[2, 3, 4],[2, 3, 4]];
    const matriz2 = [[1, 2, 3],[2, 3, 4],[1, 3, 4]]
    /*const n1 = +prompt("Ingrese el numero de filas de la Matriz 1: ");
    const m1 = +prompt("Ingrese el numero de filas de la Matriz 1: ");
    const matriz1= [i][j];
    for(var i = 0; i < n1; i++)
    {
        for(var j = 0; j < m1; j ++)
        {
            matriz1[i][j] = +prompt("Matriz 1 ["+i+"]["+j+"] = ");
        }
    }
    const n2 = +prompt("Ingrese el numero de filas de la Matriz 2: ");
    const m2 = +prompt("Ingrese el numero de filas de la Matriz 2: ");
    const matriz2: number [][] = [i][j];
    for(var i = 0; i < n2; i++)
    {
        for(var j = 0; j < m2; j ++)
        {
            matriz2[i][j] = +prompt("Matriz 1 ["+i+"]["+j+"] = ");
        }
    }*/
    MatricesIguales(matriz1, matriz2);
}

function Filas(matriz1): void
{
    var suma = 0;
    const n = matriz1.length;
    const m = matriz1[1].length;
    for(var i = 0; i < n; i ++)
    {
        suma = suma + matriz1[i][1];
    }
    console.log("La suma de la primera fila es: "+suma);

function recorrerArreglo(arregloNumeros : number[], indice: number){
    const tamaño = arregloNumeros.length-1
    if(indice == tamaño){
        console.log("Fin del arreglo");
    }else{
        indice ++ 
        console.log(arregloNumeros[indice])
        recorrerArreglo(arregloNumeros,indice); 
    }

}

function immprimirMensajeNVeces(mensaje:string , numeroVeces:number):void{
     if(numeroVeces == 0){
         console.log("Se terminó")
     }else{
         console.log(mensaje)
         const nuevoNumeroVeces = numeroVeces - 1;
         immprimirMensajeNVeces(mensaje,nuevoNumeroVeces)
     }
}

function main(){
    recorrerArreglo([1, 2, 3, 4],0)

}