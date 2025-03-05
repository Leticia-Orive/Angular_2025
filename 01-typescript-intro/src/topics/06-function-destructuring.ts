
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

function taxCalculation(options: TaxCalculationOptions): number[] {
    //implementacion
    let total = 0;
    options.products.forEach(product => {
        //son lo mismo total = total + product.price;
        total += product.price;
    });
    return[total, total * options.tax];

}


const shoppingCart = [phone, tablet];
const tax = 0.16;

const result = taxCalculation({
    tax, 
    products: shoppingCart
});

console.log('Total', result[0]);
console.log('Tax', result[1]);

export {};