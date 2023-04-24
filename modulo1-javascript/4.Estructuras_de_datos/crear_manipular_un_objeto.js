/* Crear y manipular un Objeto
1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
3. Agrega una propiedad ocupacion al objeto.
4. Muestra en consola todas las propiedades y sus valores usando un bucle for...in.
*/

class Persona {
    nombre = "Albanis";
    apellido = "Gonzalez";
    edad = 30;
    ciudad = "Madrid";
}
// crear un objeto a partir de una clase 
const persona1 = new Persona();

// cambiar ciudad
persona1.ciudad = "Barcelona";

// agregar nuevo atributo 
persona1.ocupacion = "Develop";

// agregar un nuevo arrays de telefono 

persona1.telefono = "644609698";

//ejemplo de key: nombre, apellido, edad, ciudad

for (const key in persona1) {
    console.log(key);
}

for (const key in persona1) {
    console.log(persona1[key]);
}







