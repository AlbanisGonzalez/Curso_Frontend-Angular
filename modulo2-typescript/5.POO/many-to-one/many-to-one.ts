import { IProduct } from "./product.model";
import { ISupermarket } from "./supermarket.model";

let mercadona: ISupermarket = {
    id: 1,
    brandName: "Mercadona Industrias SL",
    m2: 150,
    numEmployees: 20,
    products: []
}

let yogures: IProduct = {
    id: 1,
    title: "yogures sabor kivi",
    price: 4.99,
    quantity: 6,
    supermarket: mercadona
}

let pan: IProduct = {
    id: 2,
    title: "Pan de pueblo Rustico",
    price: 0.99,
    quantity: 20,
    supermarket: mercadona
}

// Completar asociacion bidireccional
// Desde un producto acceder a un supermercado
// Desde un supermercado puedo acceder a los productos 

mercadona.products.push(yogures);
mercadona.products.push(pan);

// Crear otro supermercado esta vez pasando los productos directamente 

let aldimerka: ISupermarket = {
    id: 2,
    brandName: "Aldimerka es Para Todos",
    m2: 200,
    numEmployees: 24,
    products: [
        {
            id: 3,
            title: "Piña",
            price: 9.87,
            quantity: 7,
        },
        {
            id: 4,
            title: "Maracuya",
            price: 0.87,
            quantity: 600,
        }
    ]
}
// manual
aldimerka.products[0].supermarket = aldimerka;
aldimerka.products[1].supermarket = aldimerka;

// Utilizando for 
for (const product of aldimerka.products)
    product.supermarket = aldimerka;

// Utilizando for each 

aldimerka.products.forEach(product => product.supermarket = aldimerka);
let prices = aldimerka.products.map(product => product.price)
console.log(prices);

