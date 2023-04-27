/*
1. La interfaz Movie
En  un  archivo  movie.ts  crear  una  interfaz  Movie  que  represente  una  película  con  los  siguientes
atributos:
• id: number
• title: string
• year: number
• director: string
• duration: number
• genres: string[]
• rate: number

2. La clase MovieDatabase
Crear  una  clase  MovieDatabase  que  tenga  una  estructura  de  datos  de  objetos  Movie  y  métodos  para
insertar, actualizar, borrar y consultar películas sobre esa estructura de datos.


3. El archivo main.ts
Crear un archivo main.ts que cree una instancia de MovieDatabase y ejecute los métodos de insertar,
actualizar, borrar y consultar películas.
Nota:  al  estar  cada  película  identificada  por  un  id,  se  puede  usar  el  id  para  buscar,  actualizar  o
borrar una película. Intentar generar el id automáticamente con un método generateNextId().
Nota: como la interfaz Movie y la clase MovieDatabase se encuentran en archivos diferentes, se debe
importar la interfaz Movie en el archivo main.ts para poder usarla en la clase MovieDatabase. Al igual
que  la  clase  MovieDatabase  se  debe  importar  en  el  archivo  main.ts  para  poder  usarla  en  el  archivo
main.ts.
*/
export interface IEvent {
    id: number;
    title: string;
    priority: string;
    fecha: Date;
    descrption: string;
}