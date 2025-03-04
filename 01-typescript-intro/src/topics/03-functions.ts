

function addNumbers(a: number ,b: number): number {
    return a + b;
    
}
//funciones de flecha
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`; // esto se llama `` vati
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2): number {
    return firstNumber * base;

}
// Para poner la constante en forma de string se pone el .toString() al final
// const result: string = addNumbers(1, 2).toString();

/*const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number= multiply(5);
console.log({result, result2, multiplyResult});*/

interface Character {
    name: string; //lo que viene detras de los dos puntos es el tipo de dato
    hp: number;
    showHp: () => void; //funcion que no recibe parametros y no regresa nada
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
    
}
//Definimos a nuestro personaje
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}
//llamamos al personaje y le pasamos la funcion
healCharacter(strider, 10);
//Llamamos a la funcion
strider.showHp();






export {};