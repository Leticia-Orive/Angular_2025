
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy S10',
    price: 700
}

const tablet: Product = {
    description: 'iPad Air 2',
    price: 500
   
}
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): [number, number] {
    //function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
    //function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;
    //implementacion
    let total = 0;
    /*options.products.forEach(product => {
        son lo mismo total = total + product.price;
        total += product.price;
    });*/
    //Destructuracion de tareas
    //options.products.forEach(({price}) => {
        products.forEach(({price}) => {    
        total += price;
    });
    //return[total, total * options.tax];
    return[total, total * tax];
    

}


const shoppingCart = [phone, tablet];
const tax = 0.16;

//Para que tax no salgo con error se le puede poner un valor por defecto
//const tax = 0.16;
/** 
const [total, tax] = taxCalculation({
    tax: 0.15, 
    products: shoppingCart
}); */

const [total, taxTotal] = taxCalculation({
    tax: tax, 
    products: shoppingCart
});

console.log('Total', total);
console.log('Tax', tax);

export {};