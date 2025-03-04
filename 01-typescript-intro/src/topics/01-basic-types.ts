
//si sabemos que tipo no va a variar le podemos añadir una constante
const name: string = 'Stider'; 

//Creamos una variable porque se que la voy a cambiar y por eso pongo let
//Para ponerlo tambien en string  usamos el caracter de tuberia | string o podemos poner la palabra asignada
//let hpPoints: number | string = 95;
let hpPoints: number | 'FULL' = 95;

//Creamos otra variable en este casa no se va a mover y va ser boolean y la inicializamos en true
const isAlive: boolean = true;

//Tambien puedo decir que hpPoints es lleno
hpPoints= 'FULL';

//Añadimos un console.log para ver los resultados
console.log({name, hpPoints, isAlive});



//let name = 'Stider';  Creamos las variables con let

// name = 123  Error porque el tipo de dato no es el mismo que el de la variable
// name = '123';  No hay error porque el tipo de dato es el mismo que el de la variable



export {}; // Para que no haya problemas con las variables globales al compilar el archivo y ponemos un objecto