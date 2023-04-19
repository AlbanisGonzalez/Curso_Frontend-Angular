/*
 Uso de map, filter y reduce en Arrays
1. Crea  un  array  llamado  calificaciones  que  contenga  calificaciones  numéricas  (por  ejemplo,  85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio.
*/
//Mis calificaciones
const calificaciones = [85, 90, 78, 92, 88];

console.log(calificaciones[0]);
console.log(calificaciones[4]);

//Aumento de calificaciones
const aumentoCalificacion = calificaciones.map(function (numero) {
    return numero + 5;
});
console.log(`Las calificaciones aumentadas en 5 puntos son las siguientes: ${aumentoCalificacion}`);

//Calificaciones mayores o iguales a 90

const calificacionesMayores = calificaciones.filter(function (numero) {
    return numero >= 90;
});
console.log(`Las calificaciones mayores o iguales a 90 son: ${calificacionesMayores}`);

// Calcular la calificacion promedio

const sumaCalificaciones = calificaciones.reduce(function (acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(`Suma de calificaciones ${sumaCalificaciones}`);

console.log('Tamaño del array ' + calificaciones.length);
console.log('La calificacion promedio es ' + sumaCalificaciones / calificaciones.length);

