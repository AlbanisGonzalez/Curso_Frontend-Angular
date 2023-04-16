/*
Crear una clase y un objeto
1. Crea  una  clase  llamada  Persona  con  las  propiedades  nombre,  apellido  y  edad,  y  un  método
llamado saludar que imprima en consola un saludo con el nombre y apellido de la persona.
2. Instancia un objeto de la clase Persona y llama al método saludar.
*/

class Persona {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar() {
        console.log("Saludos a " + this.nombre + " " + this.apellido)
    }
}
const objeto = new Persona('JEANFRANCO', 'CORES', 30)
const objeto1 = new Persona('ALBANIS', 'GONZALEZ', 30)

objeto.saludar()
objeto1.saludar()

