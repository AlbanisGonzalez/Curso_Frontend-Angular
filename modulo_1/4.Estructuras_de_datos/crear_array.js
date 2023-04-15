/*Crear y manipular un Array
1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" y "naranja".
2. Agrega una fruta al final del array usando el método push.
3. Elimina la primera fruta del array usando el método shift.
4. Muestra en consola la longitud del array.*/


//Agregando fruta con el metodo push
const frutas= [`manzana` ,`platano`,`naranja`];
const frutasAgregadas = frutas.push (`uva`, `pera`);
console.log(frutas);
console.log(frutasAgregadas);


//Eliminando frutas con el metodo shift
const frutasEliminadas = frutas.shift()
console.log(frutas);
console.log(frutasEliminadas)

// A platano añadir amarillo

frutas [1]+= "Amarillo";
console.log(frutas1);
