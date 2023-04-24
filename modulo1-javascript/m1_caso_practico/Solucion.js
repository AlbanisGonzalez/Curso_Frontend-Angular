/*Crear una clase que represente una Tarea que tenga las siguientes propiedades:
• id
• titulo
• descripcion
• estado
• prioridad
• fecha de entrega (es un Date)
Crear  una  clase  que  represente  un  servicio  de  tareas  que  tenga  como  atributo  una  estructura  de
datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea
• Devolver todas las tareas
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad
• Actualizar una tarea
• Eliminar una tarea
Una  vez  creadas  las  dos  clases,  crear  una  instancia  del  servicio  de  tareas  y  ejecutar  todos  los
métodos que tiene para probar que todo funciona correctamente.
El resultado es que el servicio de tareas debe tener una estructura de datos con todas las tareas que
se han ido añadiendo, modificando, eliminando, etc*/

class Tarea {
    constructor(id, titulo, descripcion, estado, prioridad, fechaDeEntrega) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.prioridad = prioridad;
        this.fechaDeEntrega = fechaDeEntrega;
    }
}

class ServicioTareas {
    constructor() {
        this.tareas = [];
    }

    nuevaTarea(tarea) {
        this.tareas.push(tarea);
    }

    todasLasTareas() {
        return this.tareas;
    }

    todasLasTareasPorEstado(estado) {
        return this.tareas.filter(tarea => tarea.estado === estado);
    }

    todasLasTareasPorPrioridad(prioridad) {
        return this.tareas.filter(tarea => tarea.prioridad === prioridad);
    }

    eliminarTarea(id) {
        let i = this.tareas.findIndex((element) => element.id === id)
        this.tareas.splice(i, 1)
    }

    actualizarEstadoTarea(id) {
        this.tareas = this.tareas.map(x => {
            if (x.id === id) {
                x.estado = "HECHO"
            }
            return x
        })
    }
}


/* 
1. CREAR UNA INSTANCIA DE LA CLASE DE SERVICIO DE TAREAS
2. EJECUTAR TODOS LOS METODOS DE LA CLASE SERVICIO DE TAREAS
2.1 Ejecutar el metodo nuevaTarea: OK
2.2 Ejecutar el metodo todaslasTareas: OK
2.3 Ejecutar el metodo todaslasTareasPorEstado: OK
2.4 Ejecutar el metodo todasLasTareasPorPrioridad: OK
2.5 Ejecutar el metodo eliminarTarea: OK
3. MOSTRAR LOS RESULTADOS
*/

const serviceobject = new ServicioTareas()

const tarea = new Tarea(1, "Cocinar", "AREPAS", "POR HACER", "NORMAL", new Date('2023-04-23'));
console.log(serviceobject.todasLasTareas());

serviceobject.nuevaTarea(tarea)

const t1 = new Tarea(2, "IR AL MERCADO", "LLEVAR BOLSA", "POR HACER", "NORMAL", new Date('2023-05-23'));
serviceobject.nuevaTarea(t1)

const t2 = new Tarea(3, "BAÑAR AL PERRO", "COMPRAR SHAMPOO", "POR HACER", "NORMAL", new Date('2023-07-3'));
serviceobject.nuevaTarea(t2)

const t3 = new Tarea(4, "ASISTIR AL CURSO", "LLEVAR LAPTOP", "HECHO", "ALTA", new Date('2023-07-3'));
serviceobject.nuevaTarea(t3)

serviceobject.nuevaTarea(new Tarea(5, "ESTUDIAR PARA EL EXAMEN", "DEDICAR TIEMPO", "HECHO", "ALTA", new Date('2023-07-3')))

console.log(serviceobject.todasLasTareas())
console.log("Las tareas de estado hecho son:", serviceobject.todasLasTareasPorEstado("HECHO"));
console.log("Las tareas de prioridad normal son:", serviceobject.todasLasTareasPorPrioridad("NORMAL"));


serviceobject.eliminarTarea(5)
console.log(serviceobject.todasLasTareas());

serviceobject.actualizarEstadoTarea(tarea.id)
serviceobject.actualizarEstadoTarea(t1.id)
console.log(serviceobject.todasLasTareas());












//trello = gestor de tarea