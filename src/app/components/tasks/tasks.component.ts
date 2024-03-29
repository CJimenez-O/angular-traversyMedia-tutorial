import { Component } from '@angular/core';
import {Task} from '../../Task'
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  taskList: Task[] = TASKS;

}
