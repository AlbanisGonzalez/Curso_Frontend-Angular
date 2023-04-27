import { IEvent } from "./event.model";
import { EventService } from "./event.service";

const eventService = new EventService();
console.log(eventService.findAll());
let event1: IEvent = {
    id: -1, // porque es obligatorio y el id se autogenera en el metodo save(),
    title: "Evento1",
    priority: "Baja",
    fecha: new Date(),
    descrption: "Lorem ipsu dolor"
}
console.log(eventService.save(event1));