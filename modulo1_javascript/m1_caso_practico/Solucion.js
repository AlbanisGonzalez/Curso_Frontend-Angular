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

    

    /**
     * tareas = [{estado: 1}, {estado: 0}, {estado: 1}, {estado: 3}];
     * estado = 1;
     * 1 - tareas[0].estado === estado ? true
     * 2 - tareas[1].estado === estado ? false
     */
    todasLasTareasPorEstado(estado) {
        return this.tareas.filter(tarea => tarea.estado === estado);
    }
    todasLasTareasPorPrioridad(prioridad){
        return this.prioridad.filter(tarea => tarea.prioridad===prioridad);
    }

    eliminartodaslastarea(id){
        this.tareas.findIndex()
        this.tareas.splice(tareaIndex, 1)
    }
}











//trello = gestor de tarea