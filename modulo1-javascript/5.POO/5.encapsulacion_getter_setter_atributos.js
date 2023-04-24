// ejemplo de calse con atributos encapsulados utilizando getter y setter 

class Persona {
    constructor ( nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    cambiarEdad(nuevaEdad){
        this.edad = nuevaEdad;
    }
}
let persona1 = new persona ('persona1',20);
persona1.edad = 3;// asiganacion directa, funciona si el atributo es publico
console.log(persona1.edad);// 3
