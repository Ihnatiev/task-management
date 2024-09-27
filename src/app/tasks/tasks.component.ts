import { Component, Input } from '@angular/core';
import { TaskComponent } from "./components/task/task.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { Task } from "./interfaces";
import { TasksService } from "./services/tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}
