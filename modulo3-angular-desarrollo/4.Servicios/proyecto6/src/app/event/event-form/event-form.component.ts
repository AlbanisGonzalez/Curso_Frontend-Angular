import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  title: string = ""
  createdEvent: IEvent | undefined;
  titleToUpdate: string = "";
  eventToUpdate: IEvent | undefined;
  // componente que permite crear nuevos IEvent y actualizar un IEvent
  constructor(private eventService: EventService) {
  }
  // Se ejecuta siempre de forma automática al entrar 
  ngOnInit(): void {
    // recuperar IEvent por id 1
    this.eventService.findById(1).subscribe(data => {
      this.eventToUpdate = data;
      this.titleToUpdate = this.eventToUpdate.title;
    });
  }
  // cargar titulo del IEvent

  create(): void {
    let event: IEvent = {
      userID: 1,
      id: undefined,
      title: this.title,
      completed: false
    }
    this.eventService.create(event).subscribe(data => this.createdEvent = data);
  }
  update(): void {
    if (!this.eventToUpdate) return; // si no hay evento a actualizar entonces marchamos 
    this.eventToUpdate.title = this.titleToUpdate;
    this.eventService.update(this.eventToUpdate).subscribe(data => console.log(data));
  }
  delete(): void {
    
  }
}


