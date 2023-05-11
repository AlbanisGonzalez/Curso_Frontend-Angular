import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private eventService: EventService) { }
  ngOnInit(): void {
    this.findAll()
  }
  findAllByCompletedTrue() {
    this.eventService.findAllByCompletedTrue()
      .subscribe(data => this.events = data);
  }

  findAllByCompletedFalse() {
    this.eventService.findAllByCompletedFalse()
      .subscribe(data => this.events = data);
  }

  findAll(): void {
    this.eventService.findAll().subscribe(data =>this.events = data);
  }
}
  
    
  





