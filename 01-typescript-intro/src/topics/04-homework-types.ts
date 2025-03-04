import { Super } from './../../node_modules/@types/estree/index.d';
/*
    ===== Código de TypeScript =====
*/
//implementar la interface en superHeroe
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
    }
    //Se aconseja que un objecto interno tambien tenga su propia interface
    interface Address {
        street: string; //para cambiar el nombre de la calle pulsamos F2 + ENTER
        country: string;
        city: string;

    }

    /**Esto seria una forma pero no es la mas bonita 
    name: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    showAddress: () => string;*/


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};