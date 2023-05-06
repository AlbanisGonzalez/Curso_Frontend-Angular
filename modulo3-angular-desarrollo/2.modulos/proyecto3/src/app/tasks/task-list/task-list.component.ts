import { Component } from '@angular/core';
import { ITask } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: ITask [] = [
    {
      id: 1,
      title: 'Crear modulos en Angular',
      hours:7
    },
    {
      id: 2,
      title: 'Crear componentes Angular',
      hours:8
    },
    {
      id: 3,
      title: 'Crear servicios Angular',
      hours:10
    }
  ]
}


