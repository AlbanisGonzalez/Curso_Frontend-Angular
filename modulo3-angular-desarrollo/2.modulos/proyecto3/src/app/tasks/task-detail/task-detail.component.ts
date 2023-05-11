import { Component } from '@angular/core';
import { ITask } from '../task.model';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  fontcolor: string = 'red';
  task: ITask = {
    id: 1,
    title: 'Modulos con Angular',
    hours: 5
  }
}
