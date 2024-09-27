import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close: EventEmitter<void> = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService: TasksService = inject(TasksService);

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
