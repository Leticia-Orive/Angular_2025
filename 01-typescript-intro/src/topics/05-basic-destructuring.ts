
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    //details: {}; // object
    details: Details;
}
interface Details{
    author: string;
    year: number;
}
//Moldear un objeto
const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
        
    }
}

//Destructuracion de se puede utilizar en objetos,modulos,funciones,arreglo
const song = 'New Song';
 const {
    song: anotherSong, 
    songDuration: duration, 
    details
} = audioPlayer;
 //details > author
const {author} = details;
/*Aqui se esta destructurando el objeto audioPlayer y se esta obteniendo las propiedades que se necesitan
const {audioVolume, songDuration, song} = audioPlayer;*/
/** 
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
//console.log('Author: ', audioPlayer.details.author);
console.log('Author: ', author);
*/

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];
//const trunks = dbz[3] || 'No hay personaje';
console.error('Personaje 3:', trunks);


export {};