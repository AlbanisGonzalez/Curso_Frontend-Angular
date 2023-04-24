
// Manejo de fechas 

let fechaActual = new Date ();
console.log(fechaActual);

//YYYY-MM-DD
let fechaNacimiento = new Date ("1992-12-14");
console.log (fechaNacimiento);

//extraer el año de la fecha 
console.log(fechaNacimiento.getFullYear());// 1992

//extraer el mes
console.log(fechaNacimiento.getMonth());// 11 porque va de 0 a 11

//cuidado los meses van de 0 a 11
let navidad = new Date( 1990, 12, 25, 23, 30);
console.log(navidad);

// caso febrero:
let ejemploFebrero = new Date (1992, 1, 30, 23, 30);
console.log(ejemploFebrero); // se va a marzo porque febrero tiene 28 dias 