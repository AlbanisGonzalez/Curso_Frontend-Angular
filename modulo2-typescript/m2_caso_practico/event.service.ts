import { IEvent } from "./event.model";

export class EventService {
    private events: Array<IEvent> = [];
    private blackwords = ['prohibido1', 'prohibido2', 'prohibido3'];

    // devuelve todos los elementos
    findAll(): Array<IEvent> {
        return new Array(...this.events); // devolver una copia del array events
    }
    // devuelve un evento filtrando por id 
    public findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id);
    }
    // devuelve un evento filtrado por prioridad
    public findAllByPriority(prioridad: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === prioridad);
    }
    public save(event: IEvent): IEvent {
        if (event.id)
            throw new Error("Para crear un nuevo evento no se añade id");

        // comprobar si existe otro evento con el mismo titulo, en ese caso lanzar un error
        if (!this.isValid(event))
            throw new Error("Datos incorrectos");

        // generar nuevo id y asiganrlo al event que se quiere guardar
        event.id = this.generateNextId();

        // guardar
        this.events.push(event);
        return event
    }
    public update(event: IEvent): IEvent {
        if (!event.id)
            throw new Error("El id tiene que ser valido");
        let position = this.events.findIndex(currentEvent => currentEvent.id === event.id);
        if (position === -1)
            throw new Error("404 no found");

        if (this.isValid(event))
            this.events[position].title = event.title;
        this.events[position].priority = event.priority;
        this.events[position].fecha = event.fecha;
        this.events[position].descrption = event.descrption;
        return event;
    }
    public deleteById(id: number): boolean {
        let position = this.events.findIndex(currentEvent => currentEvent.id === id);
        if (position === -1)
            throw new Error("404 not found");
        return this.events.splice(position, 1).length === 1;
    }

    private isValid(event: IEvent): boolean {
        //1. Validacion 1: Title tenga la longitud entre 10 y 50
        if (event.title.length < 10 || event.title.length > 50)
            return false;

        //2. Validacion 2: Title del evento no este ocupado ya 
        for (const currentEvent of this.events)
            if (currentEvent.title === event.title) // si es true significa que el titulo ya existe
                return false;


        //3. Validacion 3: Title no contenga una palabra prohibida
        for (const word of this.blackwords)
            if (event.title.includes(word))
                return false;
        return true; // todo Ok

    }

    private generateNextId(): number {
        let maxId = 0;
        for (const event of this.events) {
            if (event.id > maxId)
                maxId = event.id;
        }
        return ++maxId;
    }

}


