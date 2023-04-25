/*
Si queremos crear objetos "modelos de datos" que simplemente tienen atributos por ejemplo
para leer / traer / consumir datos de un API REST o una URL podemos utilizar interfaces
para declarar esos atributos y crear objetos a partir de esas interfaces de forma sencilla

Luego los métodos y comportamiento se podrían separar a otra clase por ejemplo BookService

De esta forma tendríamos:

* IBook: Modelo de datos (interface)
* BookService: Servicio con lógica de negocio (métodos, comportamiento) sobre objetos libros

MVC - Modelo Vista Controlador

*/


interface IBook {
    id: number;
    title: string;
    autor: string;
    editorial: string;
    numPages: number;
}

let book1: IBook = {
    id: 1,
    title: "book1",
    autor: "francisco perez",
    editorial: "2023",
    numPages: 345
}
console.log (book1.title)
let book2: IBook = {
    id: 2,
    title: "book2",
    autor: "francisco perez",
    editorial: "2024",
    numPages: 422
}
console.log(book2.title)