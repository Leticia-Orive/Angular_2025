//Tambien lo podiamos a ver llamado modulos

import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    
    {
        description: 'iPad',
        price: 300,
    }
    
];
//tax = 0.16%
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.16
});
console.log('Total', total);
console.log('Tax', tax);
