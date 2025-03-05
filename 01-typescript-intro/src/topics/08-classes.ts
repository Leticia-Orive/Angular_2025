


export class Person {
    /** La pablabra public se va poder ve desde el mundo exterior 
     * Si seria private no se podria ver desde el mundo exterior
     * Si seria protected solo se podria ver desde la clase y las clases que heredan de ella
    */
/**En angular si que se pone asi pero TypesScript se pone de otra manera
 * public name: string ; // añades | undefined para que no te de error y otra forma es poner ?
    private address: string;
 */
// esta es la forma mas corta de ponerlo
    constructor(
        //public name: string,
        public firstName: string,
        public lastName: string,
        private address: string = 'No Address'
    ) {}
    

}

/*export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( realName, 'new york');
    }
    
}*/
    
//? significa que es opcional
/**Esta es otra forma que no esta mal pero mas larga 
    constructor( name: string, address: string) {
        /**Tambien se puede poner asi pero no te sale lo que pone en la constante sino lo que pones aqui:
         * this.name = 'Leticia';
         * this.address = 'Calle Falsa 123';
       */  
     /**   this.name = name;
        this.address = address;
    }*/ 

        export class Hero  {
            //creamos una nueva propiedad que es de tipo Person
            //public person: Person; 
            constructor(
                public alterEgo: string,
                public age: number,
                public realName: string,
                public person: Person,
            ) {
                /** Envede crear la instancia en este punto que se puede crear lo voy a crear aqui 
                this.person = new Person(realName);*/
                
            }
            
        }
 
const leticia = new Person('Leticia','Orive', 'Calle Falsa 123');


const ironman = new Hero('Ironman',45, 'Tony', leticia);
console.log(ironman);

/** Se puede poner tambien asi
 * export { Person }
 */
