class Aula {
    constructor(private id: number, private capacidad: number, private ventilacion: boolean) {}

    getCapacidad() {
        return this.capacidad;
    }
    setCapacidad(capacidad: number) {
        this.capacidad = capacidad > 0 && capacidad <= 90 ? capacidad : this.capacidad;
    }
}

const aulaCursoAngular = new Aula(1, 25, true);
const aulaReuniones = new Aula(2, 3, false);
const aulaAnalisisDatos = new Aula(3, 20, true);

console.log(aulaCursoAngular);
// NO SE PUEDE ACCEDER DIRECTAMENTE A LAS PROPIEDADES PRIVATE
// console.log(aulaCursoAngular.id); // error TS2341: Property 'id' is private and only accessible within class 'Aula'.
// aulaCursoAngular.capacidad = 80;

// PRUEBA 1: CAMBIAR CAPACIDAD A UN VALOR PERMITIDO
aulaCursoAngular.setCapacidad(37); // 35
console.log(aulaCursoAngular.getCapacidad());

// PRUEBA 1: CAMBIAR CAPACIDAD A UN VALOR NO PERMITIDO
aulaCursoAngular.setCapacidad(80); // 35
console.log(aulaCursoAngular.getCapacidad());