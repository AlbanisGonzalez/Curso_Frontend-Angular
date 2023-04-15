let preciosSinDescuento = [4.9, 10.24, 40.90, 100.0];
// Añadir un 20% de descuento a los precios y mostrar el precio con y sin descuento

// Pass a function to map
// 1. 0.98 es el descuento de mi primer precio

// 1. aumentodescuento = 4.9 : aumentodescuento * 0.2 = 0.98 : 4.9 - 0.98
const preciosConDescuento = preciosSinDescuento.map(aumentodescuento => aumentodescuento - (aumentodescuento * 0.2));
console.log(preciosConDescuento)
// para conocer mi precio con descuento 


//let preciossinIva = [4.9, 10.24, 40.90, 100.0];
// //Obtener un array preciosconIva utilizando la funcion map

// let preciosconiva = preciossinIva.map(function (precio) {
//     return precio * 0.21 + precio;
// });

// console.log(`Los precios aumentados sin iva son: ${preciossinIva}`);
// console.log(`Los precios aumentados con iva son: ${preciosconiva}`);

// // HECHO POR ALAN

// let preciosconIva = preciossinIva.map(precio => precio * 0.21 + precio);
// console.log(preciossinIva);
// console.log(preciosconIva);




