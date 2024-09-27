import { Component, inject, Input } from '@angular/core';
import { Task } from "../../interfaces";
import { CardComponent } from "../../../shared/components/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService: TasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
