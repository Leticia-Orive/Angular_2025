


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
        public name: string,
        private address: string = 'No Address'
    ) {}
    

}
    
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



const ironman = new Person('Ironman', 'New York');
console.log(ironman);

/** Se puede poner tambien asi
 * export { Person }
 */
