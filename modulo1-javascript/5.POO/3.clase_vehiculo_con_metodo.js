/*
crear clase Vehiculo que tenga un constructor con atributos para vehiculos 
crear metodos en la clase relacionados con Vehiculos :acelerar , frenar, encender, apagar
utilizar metodos*/

class Vehiculo {
    constructor(
        //estado de un objeto
        fabricante, modelo, color, caballos, estaEncendido, velocidad) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false;// el coche inicialmente esta apagado 
        this.velocidad = velocidad;
    }
    //comportamiento
    encender() {
        this.estaEncendido = true;
    }
    apagar() {
        this.estaEncendido = false;
    }
    acelerar(cantidad) {
        //1. que pasa si la cantidad a acelerar es negativa
        if (cantidad <= 0)
            return;
        //2. que pasa si la cantidad a acelerar hace que se supere el limite de 120 km h
        // en ese caso dejaremos 120, pero no debe sobrepasar ese limite
        if (this.velocidad + cantidad > 120) {
            console.log("se ha excedido la velocidad maxima, se queda en el maximo 120.");
            this.velocidad = 120;
            return;
        }
        this.velocidad += cantidad;
    }

    frenar(cantidad) {
        // TODO ajustar limite 
        this.velocidad -= cantidad;
    }
}
let vehiculo1 = new Vehiculo("toyota", "prius", "rojo", 120);
console.log(vehiculo1.estaEncendido);// false

vehiculo1.encender();
console.log(vehiculo1.estaEncendido);// true

vehiculo1.apagar();
console.log(vehiculo1.estaEncendido);// false
console.log(vehiculo1.velocidad); // 0
vehiculo1.acelerar(50); // 50 km / h
console.log(vehiculo1.velocidad); // 50

vehiculo1.frenar(20);
console.log(vehiculo1.velocidad); // 30 km / h


// casos límite:

// 1. qué pasa si la cantidad a acelerar es negativa

console.log("Comprobar acelerar con un número negativo: ")
console.log(vehiculo1.velocidad); // 30
vehiculo1.acelerar(-40); // En vez de restar, no hace nada, para evitar que la velocidad se quede negativa
console.log(vehiculo1.velocidad); // comprobar que la velocidad no cambia

// 2. qué pasa si la cantidad a acelerar hace que se supere el límite de 120 km h

// qué pasa si se quierer acelerar pero el coche está apagado



