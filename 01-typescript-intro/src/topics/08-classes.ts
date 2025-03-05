


export class Person {
    /** La pablabra public se va poder ve desde el mundo exterior 
     * Si seria private no se podria ver desde el mundo exterior
     * Si seria protected solo se podria ver desde la clase y las clases que heredan de ella
    */

    public name: string ; // añades | undefined para que no te de error y otra forma es poner ?
    private address: string;

    constructor() {
        this.name = 'Leticia';
        this.address = 'Calle 123';
    }

}

const ironman = new Person();
console.log(ironman);

/** Se puede poner tambien asi
 * export { Person }
 */
