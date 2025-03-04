//vamos a crear una interfaz para definir un objeto y tener unos arreglos
const skills: string[] = ['Bash', 'Counter', 'Healing']; //habilidades que va a tener el personaje

//Creamos una interfaz
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

//Creamos un objecto
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
    hometown: undefined
};

strider.hometown = 'Rivendell';

console.table(strider);





export {};